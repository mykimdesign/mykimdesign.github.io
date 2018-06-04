---
layout: post
title: "(보류)Markup: A-Cubed Buttons"
date:   2015-06-01
categories:
  - Markup
tags:
  - A-Cubed
  - html
  - css
  - markup
  - button
---

Bootstrap을 이용한 A-Cubed Buttons Design.
<br>
<br>

## Buttons

Make any link standout more when applying the `.btn` class.

```html
<a href="#" class="btn_success">Success Button</a>
```
[Basic Button](#){: .btn}
[Selected Button](#){: .btn}
[OK Button](#){: .btn}
[Cancel Button](#){: .btn}
[Apply Button](#){: .btn}
[Delete Button](#){: .btn .btn_danger}

[Primary Button](#){: .btn}
[Success Button](#){: .btn .btn_success}
[Warning Button](#){: .btn .btn_warning}
[Danger Button](#){: .btn .btn_danger}
[Info Button](#){: .btn .btn_info}

```markdown
[Primary Button Text](#link){: .btn}
[Success Button Text](#link){: .btn .btn_success}
[Warning Button Text](#link){: .btn .btn_warning}
[Danger Button Text](#link){: .btn .btn_danger}
[Info Button Text](#link){: .btn .btn_info}
```

## Unordered Lists (Nested)

  * List item one 
      * List item one 
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four


## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

### Anchor Tag (aka. Link)

This is an example of a [link](http://apple.com "Apple").

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag

The emphasize tag should _italicize_ text.

### Insert Tag

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
	margin: 0 0 5px;
	font-weight: bold;
	font-size: 38px;
	line-height: 1.2;
	and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

### Quote Tag

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

### Strong Tag

This tag shows **bold text**.

### Subscript Tag

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag

Still sticking with science and Isaac Newton's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag

This allows you to denote <var>variables</var>.
