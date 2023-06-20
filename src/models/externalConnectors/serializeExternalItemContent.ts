import {ExternalItemContent} from './externalItemContent';
import {ExternalItemContentType} from './externalItemContentType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalItemContent(externalItemContent: ExternalItemContent | undefined = {} as ExternalItemContent, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", externalItemContent.odataType);
        writer.writeEnumValue<ExternalItemContentType>("type", externalItemContent.type);
        writer.writeStringValue("value", externalItemContent.value);
        writer.writeAdditionalData(externalItemContent.additionalData);
}
