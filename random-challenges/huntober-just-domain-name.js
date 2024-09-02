//writea function that when given a URL as a string, parses out just the domain name and returns it as a string. for example: 

//domainName("https://github.com/carbonfive/raygun") == "github"

function getDomainFromURL(url) {
  try{
    let domain = new URL(url).hostname;
    return domain.replace('www.', "");
  } catch(error){
      console.error("Invalid URL");
      return null;
  }
}