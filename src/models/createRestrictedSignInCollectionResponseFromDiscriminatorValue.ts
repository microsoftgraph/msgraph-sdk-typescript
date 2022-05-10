import {RestrictedSignInCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestrictedSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestrictedSignInCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestrictedSignInCollectionResponseImpl();
}
