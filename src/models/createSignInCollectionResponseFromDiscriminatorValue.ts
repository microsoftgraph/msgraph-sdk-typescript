import { deserializeIntoSignInCollectionResponse } from './deserializeIntoSignInCollectionResponse';
import { type SignInCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInCollectionResponse;
}
