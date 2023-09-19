import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsAppX } from './serializeWindowsAppX';
import { type WindowsAppX } from './windowsAppX';
import { type WindowsAppXCollectionResponse } from './windowsAppXCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsAppXCollectionResponse(writer: SerializationWriter, windowsAppXCollectionResponse: WindowsAppXCollectionResponse | undefined = {} as WindowsAppXCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsAppXCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsAppX>("value", windowsAppXCollectionResponse.value, serializeWindowsAppX);
}
