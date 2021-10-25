import { TestChild } from "./Test";

export default function TestParent() {
    const array = [
      {
        action: false,
        type: "react",
        title: "React",
        content: "Content Web react",
        id: 4,
      },
      {
        action: true,
        type: "vue",
        title: "Vue",
        content: "Content Web vue",
        id: 5,
      },
    ];

  return (
    <div className="testparent">
      <TestChild action={false} type="react" title="React" id="0"/>
      <TestChild action={true} type="vue" title="Vue" id="1"/>
      <TestChild action={false} type="react" title="Angular" id="2"/>
      <TestChild action={true} type="vue" title="Java" id="3"/>

     {array.map(function (item, index) {
         console.log(item)
        return (
          <TestChild
            {...item}
          />
        );
        
      })} 
    </div>
  );
}
