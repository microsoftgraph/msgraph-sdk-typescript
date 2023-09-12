import { serializeWindowsInformationProtectionApp } from './serializeWindowsInformationProtectionApp';
import { type WindowsInformationProtectionStoreApp } from './windowsInformationProtectionStoreApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionStoreApp(writer: SerializationWriter, windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {} as WindowsInformationProtectionStoreApp) : void {
        serializeWindowsInformationProtectionApp(writer, windowsInformationProtectionStoreApp)
}
