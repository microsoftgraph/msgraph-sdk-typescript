import { deserializeIntoPasswordAuthenticationMethod } from './deserializeIntoPasswordAuthenticationMethod';
import { type PasswordAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPasswordAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPasswordAuthenticationMethod;
}
