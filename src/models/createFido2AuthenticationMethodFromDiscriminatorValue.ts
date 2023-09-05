import { deserializeIntoFido2AuthenticationMethod } from './deserializeIntoFido2AuthenticationMethod';
import { type Fido2AuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2AuthenticationMethod;
}
