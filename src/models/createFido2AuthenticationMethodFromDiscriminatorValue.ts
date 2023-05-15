import {deserializeIntoFido2AuthenticationMethod} from './deserializeIntoFido2AuthenticationMethod';
import {Fido2AuthenticationMethod} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2AuthenticationMethod;
}
