import {InformationalUrl} from './informationalUrl';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationalUrl(informationalUrl: InformationalUrl | undefined = {} as InformationalUrl, writer: SerializationWriter) : void {
        writer.writeStringValue("logoUrl", informationalUrl.logoUrl);
        writer.writeStringValue("marketingUrl", informationalUrl.marketingUrl);
        writer.writeStringValue("@odata.type", informationalUrl.odataType);
        writer.writeStringValue("privacyStatementUrl", informationalUrl.privacyStatementUrl);
        writer.writeStringValue("supportUrl", informationalUrl.supportUrl);
        writer.writeStringValue("termsOfServiceUrl", informationalUrl.termsOfServiceUrl);
        writer.writeAdditionalData(informationalUrl.additionalData);
}
