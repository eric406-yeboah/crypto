
const home = (req, res) => {
    res.render("index", { activePage: "home" });
  };
  
module.exports = {
    home
  
}