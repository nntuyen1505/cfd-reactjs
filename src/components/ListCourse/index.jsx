import React from 'react'
import ItemCourse from '../../components/ItemCouse/index.jsx'


export  function ListCourse({topdes, subtitle,maintitle,list}) {
    return (
      <section className="section-courseoffline">
          <div className="container">
              {
                  topdes ? (
                    <p className="top-des">
                         {topdes}
                    </p>
                  ) : null
              }

            <div className="textbox">
              {
                subtitle ? (
                  <h3 class="sub-title">{subtitle}</h3>
                  ) : null
              }
              <h2 className="main-title">{maintitle}</h2>
            </div>
            <div className="list row">

              {
                list.map(function(item, index){
                  return <ItemCourse tag={item.tag} 
                  people={item.people} 
                  like={item.like} 
                  name={item.name} 
                  des={item.des} 
                  avatar={item.avatar} 
                  teacher={item.teacher}
                 />
                })
              }
              
            </div>
          </div>
        </section>
    )
}
