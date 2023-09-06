import { type Identity } from './identity';
import { serializeIdentity } from './serializeIdentity';
import { type SharingLink } from './sharingLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSharingLink(writer: SerializationWriter, sharingLink: SharingLink | undefined = {} as SharingLink) : void {
        writer.writeObjectValue<Identity>("application", sharingLink.application, serializeIdentity);
        writer.writeStringValue("@odata.type", sharingLink.odataType);
        writer.writeBooleanValue("preventsDownload", sharingLink.preventsDownload);
        writer.writeStringValue("scope", sharingLink.scope);
        writer.writeStringValue("type", sharingLink.type);
        writer.writeStringValue("webHtml", sharingLink.webHtml);
        writer.writeStringValue("webUrl", sharingLink.webUrl);
        writer.writeAdditionalData(sharingLink.additionalData);
}
