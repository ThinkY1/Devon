// export default function Textfields({teamName}){
//     return (
    // <>
    // <label>
    //  {teamName}: <input type = "text" name = "myInputTeam" />
    // </label>
    // </>
    const Textfields = ({data}) => {
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>
            <label>{item.label}:</label>
            <input type="text" name="{'text-field-${item.id}'}" />
          </div>
        ) )}
      </div>
    );

    };
  
  export default Textfields;

