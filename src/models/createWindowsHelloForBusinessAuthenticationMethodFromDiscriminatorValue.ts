import { deserializeIntoWindowsHelloForBusinessAuthenticationMethod } from './deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import { type WindowsHelloForBusinessAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsHelloForBusinessAuthenticationMethod;
}
