import {LookupColumn} from './lookupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLookupColumn(lookupColumn: LookupColumn | undefined = {} as LookupColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleValues": n => { lookupColumn.allowMultipleValues = n.getBooleanValue(); },
        "allowUnlimitedLength": n => { lookupColumn.allowUnlimitedLength = n.getBooleanValue(); },
        "columnName": n => { lookupColumn.columnName = n.getStringValue(); },
        "listId": n => { lookupColumn.listId = n.getStringValue(); },
        "@odata.type": n => { lookupColumn.odataType = n.getStringValue(); },
        "primaryLookupColumnId": n => { lookupColumn.primaryLookupColumnId = n.getStringValue(); },
    }
}
