---
title: "Enabling pagination"
date: 2017-02-11
---

   In the _config.yml file add

<pre><code>
paginate: 5
paginate_path: "/blog/:num"
</code></pre>

   This will configure the number of blog entries per page and provide the path for static pages generated to facilitate
   pagination &ndash; each containing <code>paginate</code> number of entries.

   Iterate posts on the global <code>paginator</code> and access defined post attributes. 
<pre><code><div>
&#123;% for post in paginator.posts %&#125;
&lt;div class='row blog-post'&gt;
	&lt;p&gt;&#123;&#123;post.title&#125;&#125;&lt;/p&gt;
&lt;/div&gt;
&#123;% endfor %&#125;
</div></code></pre>

   Navigate between pages
<pre><code class='smaller'>
<!-- Pagination links -->
&lt;div class="blog-post-nav"&gt;
	&#123;% if paginator.previous_page %&#125;
		&lt;a href="&#123;&#123;paginator.previous_page_path&#125;&#125;" &gt;Previous&lt;/a&gt;
	&#123;% else %&#125;
		&lt;span class="previous"&gt;Previous&lt;/span&gt;
	&#123;% endif %&#125;
	&lt;span class="page_number"&gt;Page: &#123;&#123;paginator.page&#125;&#125; of &#123;&#123; paginator.total_pages &#125;&#125;&lt;/span&gt;
	&#123;% if paginator.next_page %&#125;
		&lt;a href="&#123;&#123;paginator.next_page_path&#125;&#125;"&gt;Next&lt;/a&gt;
	&#123;% else %&#125;
		&lt;span class="next "&gt;Next&lt;/span&gt;
	&#123;% endif %&#125;
&lt;/div&gt;
</code></pre>

   And adjust for additional media &ndash; stylesheets, scripts, etc.

<pre><code>
&lt;link rel='stylesheet' type='text/css' 
	&#123;% if page.url != "/" %&#125; href='../../style/site.css' 
	&#123;% else %&#125; href='./style/site.css' &#123;% endif %&#125; /&gt;
</code></pre>

   Because Jekyll generates each page in a separate directory the test above will ensure the correct relative path
   is used.