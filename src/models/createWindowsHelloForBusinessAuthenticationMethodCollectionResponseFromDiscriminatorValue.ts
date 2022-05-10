import {WindowsHelloForBusinessAuthenticationMethodCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsHelloForBusinessAuthenticationMethodCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsHelloForBusinessAuthenticationMethodCollectionResponseImpl();
}
