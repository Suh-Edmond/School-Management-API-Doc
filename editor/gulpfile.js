var gulp = require("gulp");
var yaml = require("js-yaml");
var path = require("path");
var fs = require("fs");

//convert yaml to json

gulp.task("swagger", function () {
    //swagger editor
    var doc = yaml.load(fs.readFileSync(path.join(__dirname, "api/swagger/swagger.yaml")));
    //swagger ui
    fs.writeFileSync(
        path.join(__dirname, "../school-management.json"),
        JSON.stringify(doc, null, "")
    );

});

//watch for changes
gulp.task("watch", function () {
    gulp.watch("api/swagger/swagger.yaml", ["swagger"]);
})
//stop all asyn tasks running
gulp.task('default', function (done) { // <--- Insert `done` as a parameter here...
    gulp.series('swagger', 'watch')
    done(); // <--- ...and call it here.
})
