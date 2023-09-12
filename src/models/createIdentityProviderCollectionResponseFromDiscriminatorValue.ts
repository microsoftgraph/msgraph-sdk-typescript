import { deserializeIntoIdentityProviderCollectionResponse } from './deserializeIntoIdentityProviderCollectionResponse';
import { type IdentityProviderCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProviderCollectionResponse;
}
