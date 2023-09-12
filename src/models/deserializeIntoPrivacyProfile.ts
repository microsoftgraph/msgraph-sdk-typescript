import { type PrivacyProfile } from './privacyProfile';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrivacyProfile(privacyProfile: PrivacyProfile | undefined = {} as PrivacyProfile) : Record<string, (node: ParseNode) => void> {
    return {
        "contactEmail": n => { privacyProfile.contactEmail = n.getStringValue(); },
        "@odata.type": n => { privacyProfile.odataType = n.getStringValue(); },
        "statementUrl": n => { privacyProfile.statementUrl = n.getStringValue(); },
    }
}
