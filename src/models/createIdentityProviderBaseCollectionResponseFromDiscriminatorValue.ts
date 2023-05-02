import {deserializeIntoIdentityProviderBaseCollectionResponse} from './deserializeIntoIdentityProviderBaseCollectionResponse';
import {IdentityProviderBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProviderBaseCollectionResponse;
}
