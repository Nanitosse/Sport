import  RenderField from '../features/Fields/RenderField';


const FieldInfoScreen = ({route})=>{
    const {item}= route.params;
     return <RenderField item={item} />;
}

export default FieldInfoScreen;