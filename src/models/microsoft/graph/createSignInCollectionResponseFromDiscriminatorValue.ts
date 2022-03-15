import {SignInCollectionResponse} from './signInCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInCollectionResponse();
}
