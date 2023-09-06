import { type LookupColumn } from './lookupColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLookupColumn(writer: SerializationWriter, lookupColumn: LookupColumn | undefined = {} as LookupColumn) : void {
        writer.writeBooleanValue("allowMultipleValues", lookupColumn.allowMultipleValues);
        writer.writeBooleanValue("allowUnlimitedLength", lookupColumn.allowUnlimitedLength);
        writer.writeStringValue("columnName", lookupColumn.columnName);
        writer.writeStringValue("listId", lookupColumn.listId);
        writer.writeStringValue("@odata.type", lookupColumn.odataType);
        writer.writeStringValue("primaryLookupColumnId", lookupColumn.primaryLookupColumnId);
        writer.writeAdditionalData(lookupColumn.additionalData);
}
