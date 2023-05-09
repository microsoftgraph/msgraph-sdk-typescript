import {deserializeIntoIdentityProvider} from './deserializeIntoIdentityProvider';
import {IdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProvider;
}
