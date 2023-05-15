import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {deserializeIntoWindowsInformationProtectionDesktopApp} from './deserializeIntoWindowsInformationProtectionDesktopApp';
import {deserializeIntoWindowsInformationProtectionStoreApp} from './deserializeIntoWindowsInformationProtectionStoreApp';
import {WindowsInformationProtectionApp, WindowsInformationProtectionDesktopApp, WindowsInformationProtectionStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsInformationProtectionDesktopApp":
                    return deserializeIntoWindowsInformationProtectionDesktopApp;
                case "#microsoft.graph.windowsInformationProtectionStoreApp":
                    return deserializeIntoWindowsInformationProtectionStoreApp;
            }
        }
    }
    return deserializeIntoWindowsInformationProtectionApp;
}
