import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharepointIds(sharepointIds: SharepointIds | undefined = {} as SharepointIds) : Record<string, (node: ParseNode) => void> {
    return {
        "listId": n => { sharepointIds.listId = n.getStringValue(); },
        "listItemId": n => { sharepointIds.listItemId = n.getStringValue(); },
        "listItemUniqueId": n => { sharepointIds.listItemUniqueId = n.getStringValue(); },
        "@odata.type": n => { sharepointIds.odataType = n.getStringValue(); },
        "siteId": n => { sharepointIds.siteId = n.getStringValue(); },
        "siteUrl": n => { sharepointIds.siteUrl = n.getStringValue(); },
        "tenantId": n => { sharepointIds.tenantId = n.getStringValue(); },
        "webId": n => { sharepointIds.webId = n.getStringValue(); },
    }
}
