import {createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue} from './createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from './serializeWindowsHelloForBusinessAuthenticationMethod';
import type {WindowsHelloForBusinessAuthenticationMethod} from './windowsHelloForBusinessAuthenticationMethod';
import type {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from './windowsHelloForBusinessAuthenticationMethodCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse(windowsHelloForBusinessAuthenticationMethodCollectionResponse: WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined = {} as WindowsHelloForBusinessAuthenticationMethodCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsHelloForBusinessAuthenticationMethodCollectionResponse),
        "value": n => { windowsHelloForBusinessAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>(createWindowsHelloForBusinessAuthenticationMethodFromDiscriminatorValue); },
    }
}
