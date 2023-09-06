import { deserializeIntoWindowsInformationProtectionApp } from './deserializeIntoWindowsInformationProtectionApp';
import { type WindowsInformationProtectionStoreApp } from './windowsInformationProtectionStoreApp';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionStoreApp(windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {} as WindowsInformationProtectionStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionStoreApp),
    }
}
