import {AuthenticationMethodFeature} from './authenticationMethodFeature';
import {UserRegistrationFeatureCount} from './userRegistrationFeatureCount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationFeatureCount(userRegistrationFeatureCount: UserRegistrationFeatureCount | undefined = {} as UserRegistrationFeatureCount) : Record<string, (node: ParseNode) => void> {
    return {
        "feature": n => { userRegistrationFeatureCount.feature = n.getEnumValue<AuthenticationMethodFeature>(AuthenticationMethodFeature); },
        "@odata.type": n => { userRegistrationFeatureCount.odataType = n.getStringValue(); },
        "userCount": n => { userRegistrationFeatureCount.userCount = n.getNumberValue(); },
    }
}
