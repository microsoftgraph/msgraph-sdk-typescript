import {LookupColumn} from './lookupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLookupColumn(lookupColumn: LookupColumn | undefined = {} as LookupColumn, writer: SerializationWriter) : void {
        writer.writeBooleanValue("allowMultipleValues", lookupColumn.allowMultipleValues);
        writer.writeBooleanValue("allowUnlimitedLength", lookupColumn.allowUnlimitedLength);
        writer.writeStringValue("columnName", lookupColumn.columnName);
        writer.writeStringValue("listId", lookupColumn.listId);
        writer.writeStringValue("@odata.type", lookupColumn.odataType);
        writer.writeStringValue("primaryLookupColumnId", lookupColumn.primaryLookupColumnId);
        writer.writeAdditionalData(lookupColumn.additionalData);
}
