import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { type Identity } from './identity';
import { serializeIdentity } from './serializeIdentity';
import { type SharingLink } from './sharingLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharingLink(sharingLink: SharingLink | undefined = {} as SharingLink) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { sharingLink.application = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "@odata.type": n => { sharingLink.odataType = n.getStringValue(); },
        "preventsDownload": n => { sharingLink.preventsDownload = n.getBooleanValue(); },
        "scope": n => { sharingLink.scope = n.getStringValue(); },
        "type": n => { sharingLink.type = n.getStringValue(); },
        "webHtml": n => { sharingLink.webHtml = n.getStringValue(); },
        "webUrl": n => { sharingLink.webUrl = n.getStringValue(); },
    }
}
