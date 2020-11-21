import React, {useState} from "react";
import Footer from "../../components/Footer";
import FooterItems from "../../FooterItems.json";


function FooterList() {

  const [ Items ] = useState(FooterItems);

  return (
    Items.map(item => (
    <Footer key={item.id}
          picture={item.picture}
          name={item.name}
          link={item.link}
    /> 
      )
    )
  )
};

export default FooterList;
