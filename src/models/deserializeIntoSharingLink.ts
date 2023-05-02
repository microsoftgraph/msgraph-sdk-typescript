import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {serializeIdentity} from './serializeIdentity';
import {SharingLink} from './sharingLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
