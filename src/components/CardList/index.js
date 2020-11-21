import React, {useState} from "react";
import Card from "../../components/Card";
import CardItems from "../../CardItems.json";


function CardList() {

  const [ Items ] = useState(CardItems);

  return (
    Items.map(item => (
    <Card key={item.id}
          description={item.description}
          picture={item.picture}
          name={item.name}
          link={item.link}
          repo={item.repo} 
    />
      )
    )
  )
};

export default CardList;
