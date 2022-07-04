import Select from "react-select";
import style from './style.module.css'
// mitooniim k az ...rest ha, estefade konim - too jalase 73 - 4 
const SelectComponent = ({ value, option, onChange, title }) => {
  return (
    <div className={style.container}>
        <h3 > {title}</h3>
      <Select value={value} options={option} onChange={onChange} className={style.select} />
    </div>
  );
};

export default SelectComponent;
