/*
 Settings
*/
var cmd_pdfcrop = "pdfcrop --gscmd gswin32c --pdfversion 1.4";
var target_dir  = "img2";

var objShell = new ActiveXObject("WScript.Shell")
var objFSO = new ActiveXObject("Scripting.FileSystemObject");
var objFolder = objFSO.getFolder(target_dir);

//WScript.Echo(objFolder.path + ":");

var fc = new Enumerator(objFolder.files);
for (; !fc.atEnd(); fc.moveNext()) {
	var f = fc.item();
	if(objFSO.getExtensionName(f) == "pdf" && f.name.indexOf("-crop") < 0) {
		//WScript.Echo(f.name + " : " + f.dateLastModified);
		
		var crop_filename = target_dir + '\\' + objFSO.getBaseName(f) + "-crop.pdf";;
		if(objFSO.FileExists(crop_filename)) {
			var crop_f = objFSO.getFile(crop_filename);
			//WScript.Echo(crop_f.name + " : " + crop_f.dateLastModified);
			
			var src_date = new Date(f.dateLastModified);
			var dst_date = new Date(crop_f.dateLastModified);
			//WScript.Echo( src_date - dst_date );
			if( src_date - dst_date < 0 ) {
				//WScript.Echo( "skip: " + f + ":" + (src_date - dst_date) );
				continue;
			}
		}

		var cmdtext = cmd_pdfcrop + " " + target_dir + "/" + f.name + " " + crop_filename;
		//WScript.Echo(cmdtext);
		objShell.run(cmdtext);

	}
}

