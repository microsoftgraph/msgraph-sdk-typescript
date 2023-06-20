import {DefaultColumnValue} from './defaultColumnValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultColumnValue(defaultColumnValue: DefaultColumnValue | undefined = {} as DefaultColumnValue, writer: SerializationWriter) : void {
        writer.writeStringValue("formula", defaultColumnValue.formula);
        writer.writeStringValue("@odata.type", defaultColumnValue.odataType);
        writer.writeStringValue("value", defaultColumnValue.value);
        writer.writeAdditionalData(defaultColumnValue.additionalData);
}
