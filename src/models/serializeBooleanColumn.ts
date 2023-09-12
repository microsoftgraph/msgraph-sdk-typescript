import { type BooleanColumn } from './booleanColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBooleanColumn(writer: SerializationWriter, booleanColumn: BooleanColumn | undefined = {} as BooleanColumn) : void {
        writer.writeStringValue("@odata.type", booleanColumn.odataType);
        writer.writeAdditionalData(booleanColumn.additionalData);
}
