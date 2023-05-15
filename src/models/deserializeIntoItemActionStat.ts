import {ItemActionStat} from './itemActionStat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActionStat(itemActionStat: ItemActionStat | undefined = {} as ItemActionStat) : Record<string, (node: ParseNode) => void> {
    return {
        "actionCount": n => { itemActionStat.actionCount = n.getNumberValue(); },
        "actorCount": n => { itemActionStat.actorCount = n.getNumberValue(); },
        "@odata.type": n => { itemActionStat.odataType = n.getStringValue(); },
    }
}
