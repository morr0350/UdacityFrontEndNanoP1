/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "im",
          sizes: [{
            width: 1600,
            suffix: "_lg_2x",
            quality: 30
          },{
            width: 640,
            height: 640,
            aspectRatio: false,
            gravity: "Center",
            suffix: "_md",
            quality: 60
          },{
            width: 320,
            suffix: "_sm",
            quality: 75
          },{
            width: 320,
            height: 320,
            aspectRatio: false,
            gravity: "Center",
            suffix: "_xs",
            quality: 75
          }]
        },
        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ["*.{gif,jpg,png}"],
          cwd: "images_src/",
          dest: "images/"
        }]
      }
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ["images"],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ["images"]
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: "images_src/fixed/*.{gif,jpg,png}",
          dest: "images/"
        }]
      },
    },
  });


  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.registerTask("default", ["clean", "mkdir", "copy", "responsive_images"]);

};
