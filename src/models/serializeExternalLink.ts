import {ExternalLink} from './externalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalLink(writer: SerializationWriter, externalLink: ExternalLink | undefined = {} as ExternalLink) : void {
        writer.writeStringValue("href", externalLink.href);
        writer.writeStringValue("@odata.type", externalLink.odataType);
        writer.writeAdditionalData(externalLink.additionalData);
}
