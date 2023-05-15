import {deserializeIntoAuthenticationStrengthRoot} from './deserializeIntoAuthenticationStrengthRoot';
import {AuthenticationStrengthRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuthenticationStrengthRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAuthenticationStrengthRoot;
}
