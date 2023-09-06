import { createSharepointIdsFromDiscriminatorValue } from './createSharepointIdsFromDiscriminatorValue';
import { type ItemReference } from './itemReference';
import { serializeSharepointIds } from './serializeSharepointIds';
import { type SharepointIds } from './sharepointIds';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemReference(itemReference: ItemReference | undefined = {} as ItemReference) : Record<string, (node: ParseNode) => void> {
    return {
        "driveId": n => { itemReference.driveId = n.getStringValue(); },
        "driveType": n => { itemReference.driveType = n.getStringValue(); },
        "id": n => { itemReference.id = n.getStringValue(); },
        "name": n => { itemReference.name = n.getStringValue(); },
        "@odata.type": n => { itemReference.odataType = n.getStringValue(); },
        "path": n => { itemReference.path = n.getStringValue(); },
        "shareId": n => { itemReference.shareId = n.getStringValue(); },
        "sharepointIds": n => { itemReference.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "siteId": n => { itemReference.siteId = n.getStringValue(); },
    }
}
