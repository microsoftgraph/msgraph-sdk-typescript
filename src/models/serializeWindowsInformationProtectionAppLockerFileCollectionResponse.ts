import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeWindowsInformationProtectionAppLockerFile } from './serializeWindowsInformationProtectionAppLockerFile';
import { type WindowsInformationProtectionAppLockerFile } from './windowsInformationProtectionAppLockerFile';
import { type WindowsInformationProtectionAppLockerFileCollectionResponse } from './windowsInformationProtectionAppLockerFileCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLockerFileCollectionResponse(writer: SerializationWriter, windowsInformationProtectionAppLockerFileCollectionResponse: WindowsInformationProtectionAppLockerFileCollectionResponse | undefined = {} as WindowsInformationProtectionAppLockerFileCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsInformationProtectionAppLockerFileCollectionResponse)
        writer.writeCollectionOfObjectValues<WindowsInformationProtectionAppLockerFile>("value", windowsInformationProtectionAppLockerFileCollectionResponse.value, serializeWindowsInformationProtectionAppLockerFile);
}
