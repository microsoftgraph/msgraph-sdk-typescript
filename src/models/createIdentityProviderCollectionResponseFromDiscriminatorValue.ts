import {deserializeIntoIdentityProviderCollectionResponse} from './deserializeIntoIdentityProviderCollectionResponse';
import {IdentityProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProviderCollectionResponse;
}
