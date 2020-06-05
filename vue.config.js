module.exports = {
    devServer: {
        port:8080,
        proxy:"http://localhost/",
        historyApiFallback: true,
  noInfo: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
    },

}