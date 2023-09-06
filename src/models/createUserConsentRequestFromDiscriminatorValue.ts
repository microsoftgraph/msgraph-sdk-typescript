import { deserializeIntoUserConsentRequest } from './deserializeIntoUserConsentRequest';
import { type UserConsentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserConsentRequest;
}
