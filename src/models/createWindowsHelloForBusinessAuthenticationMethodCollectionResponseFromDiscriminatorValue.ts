import { deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse } from './deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse';
import { type WindowsHelloForBusinessAuthenticationMethodCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsHelloForBusinessAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse;
}
