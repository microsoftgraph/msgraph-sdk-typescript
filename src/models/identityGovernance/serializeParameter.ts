import {Parameter} from './parameter';
import {ValueType} from './valueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParameter(writer: SerializationWriter, parameter: Parameter | undefined = {} as Parameter) : void {
        writer.writeStringValue("name", parameter.name);
        writer.writeStringValue("@odata.type", parameter.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("values", parameter.values);
        writer.writeEnumValue<ValueType>("valueType", parameter.valueType);
        writer.writeAdditionalData(parameter.additionalData);
}
