import {Parameter} from './parameter';
import {ValueType} from './valueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParameter(parameter: Parameter | undefined = {} as Parameter) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { parameter.name = n.getStringValue(); },
        "@odata.type": n => { parameter.odataType = n.getStringValue(); },
        "values": n => { parameter.values = n.getCollectionOfPrimitiveValues<string>(); },
        "valueType": n => { parameter.valueType = n.getEnumValue<ValueType>(ValueType); },
    }
}
