import { type ExternalLink } from './externalLink';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalLink(writer: SerializationWriter, externalLink: ExternalLink | undefined = {} as ExternalLink) : void {
        writer.writeStringValue("href", externalLink.href);
        writer.writeStringValue("@odata.type", externalLink.odataType);
        writer.writeAdditionalData(externalLink.additionalData);
}
