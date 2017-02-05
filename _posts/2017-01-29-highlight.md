---
title: "highlight.js"
date: 2017-01-29
---

   Highlight is a javascript syntax coloring library.  Highlight provides automatic language 
   detection and multi-language code highlighting.

   Example Java highlighting
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

   For future coding projects...