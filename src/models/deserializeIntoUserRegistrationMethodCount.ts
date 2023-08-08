import type {UserRegistrationMethodCount} from './userRegistrationMethodCount';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserRegistrationMethodCount(userRegistrationMethodCount: UserRegistrationMethodCount | undefined = {} as UserRegistrationMethodCount) : Record<string, (node: ParseNode) => void> {
    return {
        "authenticationMethod": n => { userRegistrationMethodCount.authenticationMethod = n.getStringValue(); },
        "@odata.type": n => { userRegistrationMethodCount.odataType = n.getStringValue(); },
        "userCount": n => { userRegistrationMethodCount.userCount = n.getNumberValue(); },
    }
}
