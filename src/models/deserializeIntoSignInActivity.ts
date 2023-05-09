import {SignInActivity} from './signInActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInActivity(signInActivity: SignInActivity | undefined = {} as SignInActivity) : Record<string, (node: ParseNode) => void> {
    return {
        "lastNonInteractiveSignInDateTime": n => { signInActivity.lastNonInteractiveSignInDateTime = n.getDateValue(); },
        "lastNonInteractiveSignInRequestId": n => { signInActivity.lastNonInteractiveSignInRequestId = n.getStringValue(); },
        "lastSignInDateTime": n => { signInActivity.lastSignInDateTime = n.getDateValue(); },
        "lastSignInRequestId": n => { signInActivity.lastSignInRequestId = n.getStringValue(); },
        "@odata.type": n => { signInActivity.odataType = n.getStringValue(); },
    }
}
