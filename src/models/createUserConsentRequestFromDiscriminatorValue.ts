import {UserConsentRequestImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConsentRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserConsentRequestImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserConsentRequestImpl();
}
