import { createWindowsWebAppFromDiscriminatorValue } from './createWindowsWebAppFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsWebApp } from './serializeWindowsWebApp';
import { type WindowsWebApp } from './windowsWebApp';
import { type WindowsWebAppCollectionResponse } from './windowsWebAppCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsWebAppCollectionResponse(windowsWebAppCollectionResponse: WindowsWebAppCollectionResponse | undefined = {} as WindowsWebAppCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsWebAppCollectionResponse),
        "value": n => { windowsWebAppCollectionResponse.value = n.getCollectionOfObjectValues<WindowsWebApp>(createWindowsWebAppFromDiscriminatorValue); },
    }
}
