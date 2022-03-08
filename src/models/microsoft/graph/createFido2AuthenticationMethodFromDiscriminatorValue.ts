import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : Fido2AuthenticationMethod {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Fido2AuthenticationMethod();
}
