import {deserializeIntoSignInCollectionResponse} from './deserializeIntoSignInCollectionResponse';
import {SignInCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInCollectionResponse;
}
