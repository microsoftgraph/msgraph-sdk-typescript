import {WindowsHelloForBusinessAuthenticationMethodImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsHelloForBusinessAuthenticationMethodImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsHelloForBusinessAuthenticationMethodImpl();
}
