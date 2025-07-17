
const home = (req, res) => {
    res.render("index", { activePage: "home" });
  };

const contact = (req, res) => {
    res.render("contact", { activePage: "contact" });
  };
  
  
module.exports = {
    home,
    contact
  
}