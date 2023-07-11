import {EmailSettings} from './emailSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmailSettings(writer: SerializationWriter, emailSettings: EmailSettings | undefined = {} as EmailSettings) : void {
        writer.writeStringValue("@odata.type", emailSettings.odataType);
        writer.writeStringValue("senderDomain", emailSettings.senderDomain);
        writer.writeBooleanValue("useCompanyBranding", emailSettings.useCompanyBranding);
        writer.writeAdditionalData(emailSettings.additionalData);
}
