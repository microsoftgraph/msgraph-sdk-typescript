import { type DefaultColumnValue } from './defaultColumnValue';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDefaultColumnValue(writer: SerializationWriter, defaultColumnValue: DefaultColumnValue | undefined = {} as DefaultColumnValue) : void {
        writer.writeStringValue("formula", defaultColumnValue.formula);
        writer.writeStringValue("@odata.type", defaultColumnValue.odataType);
        writer.writeStringValue("value", defaultColumnValue.value);
        writer.writeAdditionalData(defaultColumnValue.additionalData);
}
