import {ChoiceColumn} from './choiceColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChoiceColumn(choiceColumn: ChoiceColumn | undefined = {} as ChoiceColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowTextEntry": n => { choiceColumn.allowTextEntry = n.getBooleanValue(); },
        "choices": n => { choiceColumn.choices = n.getCollectionOfPrimitiveValues<string>(); },
        "displayAs": n => { choiceColumn.displayAs = n.getStringValue(); },
        "@odata.type": n => { choiceColumn.odataType = n.getStringValue(); },
    }
}
