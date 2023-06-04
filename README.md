# 合同ゼミ（岡山大・広島市立大・広島経済大）発表資料のテンプレート

## ディレクトリ

+ ptex-utf8/ ... pLaTeX用のテンプレート
+ luatex/    ... LuaLaTeX用のテンプレート
+ word/      ... Word 2016用のテンプレート
　　　　　　　　（Wordテンプレートには，表・画像を入れていません．）

## pLaTeX版のコンパイル

```
platex 00main.tex
platex 00main.tex
dvipdfmx 00main
```

または，

```
ptex2pdf -l 00main.tex
ptex2pdf -l 00main.tex
```

## LuaTex版のコンパイル

```
luatex 00main.tex
luatex 00main.tex
```


## pLaTeX/LuaTex用のマクロ

詳しくは，gotozemi2019.styの末尾をご覧ください．

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
