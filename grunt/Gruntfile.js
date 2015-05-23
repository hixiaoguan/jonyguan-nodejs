module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            css : {
                src: ['src/asset/*.css'],
                dest: 'dest/asset/all.css'
            },
            domop : {
                src: ['src/js/ajax.js', 'src/js/selector.js'],
                dest: 'dest/js/domop.js'
            }
        },
        cssmin: {
            css: {
                src: 'dest/asset/all.css',
                dest: 'dest/asset/all-min.css'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {//压缩domop.js为domop.min.js 放在dest目录下
                src : 'dest/js/domop.js',
                dest : 'dest/js/domop.min.js'
            }
        }
    });
    // 载入concat和css插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认任务
    grunt.registerTask('default', ['concat','cssmin','uglify']);
};