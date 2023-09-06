import { AuthenticationMethodFeature } from './authenticationMethodFeature';
import { type UserRegistrationFeatureCount } from './userRegistrationFeatureCount';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationFeatureCount(userRegistrationFeatureCount: UserRegistrationFeatureCount | undefined = {} as UserRegistrationFeatureCount) : Record<string, (node: ParseNode) => void> {
    return {
        "feature": n => { userRegistrationFeatureCount.feature = n.getEnumValue<AuthenticationMethodFeature>(AuthenticationMethodFeature); },
        "@odata.type": n => { userRegistrationFeatureCount.odataType = n.getStringValue(); },
        "userCount": n => { userRegistrationFeatureCount.userCount = n.getNumberValue(); },
    }
}
