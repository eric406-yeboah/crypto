
const home = (req, res) => {
    res.render("index", { activePage: "home" });
  };

const about = (req, res) => {
    res.render("about", { activePage: "about" });
  };
  
const service = (req, res) => {
    res.render("service", { activePage: "service" });
  };


const contact = (req, res) => {
    res.render("contact", { activePage: "contact" });
  };
  
  
module.exports = {
    home,
    about,
    service,
    contact
  
}