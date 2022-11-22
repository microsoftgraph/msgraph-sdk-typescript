import {BuiltInIdentityProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBuiltInIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BuiltInIdentityProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BuiltInIdentityProviderCollectionResponse();
}
