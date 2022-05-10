import {UserConsentRequestCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserConsentRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserConsentRequestCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserConsentRequestCollectionResponseImpl();
}
