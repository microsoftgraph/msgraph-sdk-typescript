import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsUniversalAppX } from './serializeWindowsUniversalAppX';
import { type WindowsUniversalAppX } from './windowsUniversalAppX';
import { type WindowsUniversalAppXCollectionResponse } from './windowsUniversalAppXCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsUniversalAppXCollectionResponse(writer: SerializationWriter, windowsUniversalAppXCollectionResponse: WindowsUniversalAppXCollectionResponse | undefined = {} as WindowsUniversalAppXCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsUniversalAppXCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsUniversalAppX>("value", windowsUniversalAppXCollectionResponse.value, serializeWindowsUniversalAppX);
}
