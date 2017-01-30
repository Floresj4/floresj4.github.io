---
title: "highlight.js"
date: 2017-01-29
---

   Highlight.js is a syntax highlighting library.  Highlight.js provides automatic language 
   detection, multi-language code highlighting, and a simple integration.  Add the necessary
   head metadata and initialize.

<pre><code class='html'>
&lt;link rel="stylesheet" href="/path/to/styles/default.css"&gt;
&lt;script src="/path/to/highlight.pack.js">&lt;/script&gt;
&lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
</code></pre>



<pre><code>
package com.flores.palindrome;
public class Palindrome {

	public static boolean test(String word) {
		char data[] = word.replaceAll("[!?_ ,'-.*&$]", "")
				.toLowerCase().toCharArray();

		int i, j;
		for(i = (data.length -1), j = 0; i >= 0; i--, j++) {
			if(data[i] != data[j])
				return false;
			else if(i == j)
				break;
		}
		return true;
	}
}
</code></pre>