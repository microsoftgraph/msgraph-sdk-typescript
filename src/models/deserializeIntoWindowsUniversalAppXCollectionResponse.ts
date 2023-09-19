import { createWindowsUniversalAppXFromDiscriminatorValue } from './createWindowsUniversalAppXFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeWindowsUniversalAppX } from './serializeWindowsUniversalAppX';
import { type WindowsUniversalAppX } from './windowsUniversalAppX';
import { type WindowsUniversalAppXCollectionResponse } from './windowsUniversalAppXCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppXCollectionResponse(windowsUniversalAppXCollectionResponse: WindowsUniversalAppXCollectionResponse | undefined = {} as WindowsUniversalAppXCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsUniversalAppXCollectionResponse),
        "value": n => { windowsUniversalAppXCollectionResponse.value = n.getCollectionOfObjectValues<WindowsUniversalAppX>(createWindowsUniversalAppXFromDiscriminatorValue); },
    }
}
