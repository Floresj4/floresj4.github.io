---
title: "H2 Database backup & compression"
date: 2016-03-24
---

 As part of the data manipulation grammar, the H2 database engine provides RUNSCRIPT and SCRIPT commmands.  
 Using these commands, you can script and compress an H2 embedded database 
 for light-weight storage and accessibility.

 SCRIPT TO allows you to dump the contents of a database into a backup file which 
 can optionally be compressed.  For example,

<pre><code class='sql'>
 SCRIPT TO 'c:/temp/data.db' compression deflate;
</code></pre>

 RUNSCRIPT is used to load the script file - into persistent storage (flat-file) or memories 
 tables supported by H2.
 
 <pre><code class='sql'>
 RUNSCRIPT 'c:/temp/data.db' compression deflate;
 </code></pre>
 
 Compression and deflate are both options to the grammar commands.