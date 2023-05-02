import {TextColumn} from './textColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTextColumn(textColumn: TextColumn | undefined = {} as TextColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleLines": n => { textColumn.allowMultipleLines = n.getBooleanValue(); },
        "appendChangesToExistingText": n => { textColumn.appendChangesToExistingText = n.getBooleanValue(); },
        "linesForEditing": n => { textColumn.linesForEditing = n.getNumberValue(); },
        "maxLength": n => { textColumn.maxLength = n.getNumberValue(); },
        "@odata.type": n => { textColumn.odataType = n.getStringValue(); },
        "textType": n => { textColumn.textType = n.getStringValue(); },
    }
}
