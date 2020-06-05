module.exports = {
    devServer: {
        proxy:"http://localhost:8080/",
        historyApiFallback: true,
  noInfo: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
    },

}