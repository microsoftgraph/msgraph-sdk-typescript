import { type PrivacyProfile } from './privacyProfile';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePrivacyProfile(writer: SerializationWriter, privacyProfile: PrivacyProfile | undefined = {} as PrivacyProfile) : void {
        writer.writeStringValue("contactEmail", privacyProfile.contactEmail);
        writer.writeStringValue("@odata.type", privacyProfile.odataType);
        writer.writeStringValue("statementUrl", privacyProfile.statementUrl);
        writer.writeAdditionalData(privacyProfile.additionalData);
}
