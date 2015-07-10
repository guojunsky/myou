/**grunt 配置**/
module.exports=function  (grunt) {
	require('load-grunt-tasks')(grunt);
   var base={
     src:'public/',
     dist:'public/dist/',
     less:'less/',
     css:'css/'
   };
   grunt.initConfig({
      path:base,
      pkg:grunt.file.readJSON('package.json'),
      less:{
      	 compileCore:{
      	 	options:{
      	 		strictMath:true,
      	 		sourceMap:false,
      	 		outputSourceFiles:true
      	  
      	 	},
      	 	src:'<%=path.src%><%=path.less%><%=pkg.name%>.less',
      	 	dest:'<%=path.dist%><%=path.css%><%=pkg.name%>.css'
      	 }
      },
      watch:{
      	scripts: {
      	 files:['<%=path.src%><%=path.less%>*'],
      	 tasks:['less']
      	}
      }      
   });
   grunt.registerTask('default',['watch']);
};