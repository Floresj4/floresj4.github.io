---
title: "Installing Maven Dependencies"
date: 2017-09-21
categories: maven dependency-management  
---

Java dependency not associated with a repository manager can be added to your local development repository with the following console command:

<pre><code class="dos hljs">
mvn install:install-file -Dfile=.\example.jar -DgroupdId=com.flores -DartifactId=example -Dversion=1.0.0 -Dpackaging=jar
</code></pre>

The file installs to the local repository indexed by the GroupId, ArtifactId, and Version specified 
to the install plugin, e.g. <span style='font-family:Menlo,Monaco,Consolas,"Courier New",monospace; color:#111;'>%HOME%\\.m2\com\flores\example\1.0.0\example-1.0.0.jar</span>.

The dependency can now be referenced in the Project Object Model (POM) xml as
<pre><code class='xml hljs'>
	&lt;dependency&gt;
		&lt;groupdId&gt;com.flores&lt;/groupdId&gt;
		&lt;artifactId&gt;example&lt;/artifactId&gt;
		&lt;version&gt;1.0.0&lt;/version&gt;
	&lt;/dependency&gt;
</code></pre>