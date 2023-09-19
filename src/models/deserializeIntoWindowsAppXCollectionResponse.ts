import { createWindowsAppXFromDiscriminatorValue } from './createWindowsAppXFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsAppX } from './serializeWindowsAppX';
import { type WindowsAppX } from './windowsAppX';
import { type WindowsAppXCollectionResponse } from './windowsAppXCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAppXCollectionResponse(windowsAppXCollectionResponse: WindowsAppXCollectionResponse | undefined = {} as WindowsAppXCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsAppXCollectionResponse),
        "value": n => { windowsAppXCollectionResponse.value = n.getCollectionOfObjectValues<WindowsAppX>(createWindowsAppXFromDiscriminatorValue); },
    }
}
