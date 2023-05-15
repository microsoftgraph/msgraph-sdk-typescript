import {deserializeIntoUserConsentRequest} from './deserializeIntoUserConsentRequest';
import {UserConsentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserConsentRequest;
}
