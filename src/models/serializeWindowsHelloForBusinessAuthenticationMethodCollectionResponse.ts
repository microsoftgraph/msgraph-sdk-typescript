import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsHelloForBusinessAuthenticationMethod } from './serializeWindowsHelloForBusinessAuthenticationMethod';
import { type WindowsHelloForBusinessAuthenticationMethod } from './windowsHelloForBusinessAuthenticationMethod';
import { type WindowsHelloForBusinessAuthenticationMethodCollectionResponse } from './windowsHelloForBusinessAuthenticationMethodCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsHelloForBusinessAuthenticationMethodCollectionResponse(writer: SerializationWriter, windowsHelloForBusinessAuthenticationMethodCollectionResponse: WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined = {} as WindowsHelloForBusinessAuthenticationMethodCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsHelloForBusinessAuthenticationMethodCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsHelloForBusinessAuthenticationMethod>("value", windowsHelloForBusinessAuthenticationMethodCollectionResponse.value, serializeWindowsHelloForBusinessAuthenticationMethod);
}
