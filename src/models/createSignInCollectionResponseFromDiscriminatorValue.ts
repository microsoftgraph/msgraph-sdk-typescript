import {SignInCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInCollectionResponseImpl();
}
