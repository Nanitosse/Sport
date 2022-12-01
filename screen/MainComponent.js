import { useState } from "react";
import { FIELDS } from "../shared/field";
import DirectoryScreen from './directoryScreen';
import { View } from "react-native";
import FieldInfoScreen from "./fieldInfoScreen";


const Main = () => {
    const [fields, setFields] = useState(FIELDS);
    const [selectedFieldId, setSelectedFieldId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen
                fields={fields}
                onPress={(fieldId)=> setSelectedFieldId(fieldId)}
            />
            <FieldInfoScreen
                item={
                    fields.filter(
                        (field) => field.id === selectedFieldId
                    )[0]

                }


            />

        </View>
    )

}


export default Main;