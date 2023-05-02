import {SignInStatus} from './signInStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignInStatus(signInStatus: SignInStatus | undefined = {} as SignInStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDetails": n => { signInStatus.additionalDetails = n.getStringValue(); },
        "errorCode": n => { signInStatus.errorCode = n.getNumberValue(); },
        "failureReason": n => { signInStatus.failureReason = n.getStringValue(); },
        "@odata.type": n => { signInStatus.odataType = n.getStringValue(); },
    }
}
