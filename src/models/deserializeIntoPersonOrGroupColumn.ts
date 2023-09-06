import { type PersonOrGroupColumn } from './personOrGroupColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPersonOrGroupColumn(personOrGroupColumn: PersonOrGroupColumn | undefined = {} as PersonOrGroupColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "allowMultipleSelection": n => { personOrGroupColumn.allowMultipleSelection = n.getBooleanValue(); },
        "chooseFromType": n => { personOrGroupColumn.chooseFromType = n.getStringValue(); },
        "displayAs": n => { personOrGroupColumn.displayAs = n.getStringValue(); },
        "@odata.type": n => { personOrGroupColumn.odataType = n.getStringValue(); },
    }
}
