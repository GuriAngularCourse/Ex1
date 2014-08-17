
module.exports = function(grunt){


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            min: {
                files: grunt.file.expandMapping(['src/**/*.js'], 'build/', {
                    rename: function (destBase, destPath) {
                        return destBase + destPath.replace('.js', '.min.js');
                    }
                })


            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["uglify"]);

};
