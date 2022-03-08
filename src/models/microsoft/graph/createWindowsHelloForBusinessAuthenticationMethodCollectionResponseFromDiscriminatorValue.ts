import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from './windowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsHelloForBusinessAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsHelloForBusinessAuthenticationMethodCollectionResponse();
}
