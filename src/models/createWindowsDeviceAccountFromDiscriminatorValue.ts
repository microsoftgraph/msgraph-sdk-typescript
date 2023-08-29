import {deserializeIntoWindowsDeviceADAccount} from './deserializeIntoWindowsDeviceADAccount';
import {deserializeIntoWindowsDeviceAccount} from './deserializeIntoWindowsDeviceAccount';
import {deserializeIntoWindowsDeviceAzureADAccount} from './deserializeIntoWindowsDeviceAzureADAccount';
import {WindowsDeviceADAccount, WindowsDeviceAccount, WindowsDeviceAzureADAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsDeviceADAccount":
                    return deserializeIntoWindowsDeviceADAccount;
                case "#microsoft.graph.windowsDeviceAzureADAccount":
                    return deserializeIntoWindowsDeviceAzureADAccount;
            }
        }
    }
    return deserializeIntoWindowsDeviceAccount;
}
