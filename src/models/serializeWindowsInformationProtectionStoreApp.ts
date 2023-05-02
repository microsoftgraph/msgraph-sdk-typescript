import {serializeWindowsInformationProtectionApp} from './serializeWindowsInformationProtectionApp';
import {WindowsInformationProtectionStoreApp} from './windowsInformationProtectionStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionStoreApp(writer: SerializationWriter, windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {} as WindowsInformationProtectionStoreApp) : void {
        serializeWindowsInformationProtectionApp(writer, windowsInformationProtectionStoreApp)
}
