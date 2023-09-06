import { type ExternalItemContent } from './externalItemContent';
import { ExternalItemContentType } from './externalItemContentType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalItemContent(writer: SerializationWriter, externalItemContent: ExternalItemContent | undefined = {} as ExternalItemContent) : void {
        writer.writeStringValue("@odata.type", externalItemContent.odataType);
        writer.writeEnumValue<ExternalItemContentType>("type", externalItemContent.type);
        writer.writeStringValue("value", externalItemContent.value);
        writer.writeAdditionalData(externalItemContent.additionalData);
}
