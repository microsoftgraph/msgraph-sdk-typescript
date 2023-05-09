import {PersonOrGroupColumn} from './personOrGroupColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonOrGroupColumn(personOrGroupColumn: PersonOrGroupColumn | undefined = {} as PersonOrGroupColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleSelection": n => { personOrGroupColumn.allowMultipleSelection = n.getBooleanValue(); },
        "chooseFromType": n => { personOrGroupColumn.chooseFromType = n.getStringValue(); },
        "displayAs": n => { personOrGroupColumn.displayAs = n.getStringValue(); },
        "@odata.type": n => { personOrGroupColumn.odataType = n.getStringValue(); },
    }
}
