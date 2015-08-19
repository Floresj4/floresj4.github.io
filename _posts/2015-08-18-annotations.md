---
title: "Custom Java Annotations"
date: 2015-08-15
---

Cross one off my list... I had been telling myself I would make time to write a custom annotation processor for some time now and now was today.  In the simplest scenario, I create a field-level annotation defining the creation of an object without an explicit call to a factory method which would otherwise be used.  It elimates a small amount of up-front code and provides a direct-inject resource at construction.

<ul class='blog-links'>
	<li>
		<span class='git-link'>
			<a href='https://github.com/Floresj4/JavaAnnotations' class='code'>@Floresj4/JavaAnnotations</a>
		</span>
	</li>
</ul>