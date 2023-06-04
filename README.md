# 合同ゼミ（岡山大・広島市立大・広島経済大）発表資料のテンプレート

## ディレクトリ

+ uptex/ ... upLaTeX/LuaLaTeX用のテンプレート
+ word/  ... Word 2016用のテンプレート
　　　　  　（Wordテンプレートには，表・画像を入れていません．）

## upLaTeX / LuaLaTeX 版のコンパイル

```
uplatex 00main.tex
uplatex 00main.tex
dvipdfmx 00main
```

または，

```
ptex2pdf -u -l 00main.tex
ptex2pdf -u -l 00main.tex
```

または，

```
lualatex 00main.tex
lualatex 00main.tex
```


## upLaTeX/LuaLaTex用のマクロ

詳しくは，[gotozemi2023.sty](uptex/godozemi2023.sty)の末尾をご覧ください．

```
%% 数学記号
\newcommand{\argmax}{\mathop{\rm argmax}\limits}
\newcommand{\argmin}{\mathop{\rm argmin}\limits}
\newcommand{\Vec}[1]{\mbox{\boldmath $#1$}}

%% 単位用(単位はイタリックではない)
\newcommand{\unit}[1]{\hspace{0.5em}[{\rm #1}]}

%% 図・表・式の参照
\newcommand{\figref}[1]{図~\ref{#1}}
\newcommand{\tabref}[1]{表~\ref{#1}}
\newcommand{\eqnref}[1]{式~(\ref{#1})}

%% 表の上下で使う太い横線
\def\Hline{\noalign{\hrule height 0.4mm}}
```
