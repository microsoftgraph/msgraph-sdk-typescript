import {ExternalLink} from './externalLink';
import {PageLinks} from './pageLinks';
import {serializeExternalLink} from './serializeExternalLink';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePageLinks(writer: SerializationWriter, pageLinks: PageLinks | undefined = {} as PageLinks) : void {
        writer.writeStringValue("@odata.type", pageLinks.odataType);
        writer.writeObjectValue<ExternalLink>("oneNoteClientUrl", pageLinks.oneNoteClientUrl, serializeExternalLink);
        writer.writeObjectValue<ExternalLink>("oneNoteWebUrl", pageLinks.oneNoteWebUrl, serializeExternalLink);
        writer.writeAdditionalData(pageLinks.additionalData);
}
