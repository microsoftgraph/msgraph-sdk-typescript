import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {WindowsInformationProtectionStoreApp} from './windowsInformationProtectionStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionStoreApp(windowsInformationProtectionStoreApp: WindowsInformationProtectionStoreApp | undefined = {} as WindowsInformationProtectionStoreApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtectionApp(windowsInformationProtectionStoreApp),
    }
}
