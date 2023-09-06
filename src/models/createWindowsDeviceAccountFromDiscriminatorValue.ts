import { deserializeIntoWindowsDeviceAccount } from './deserializeIntoWindowsDeviceAccount';
import { deserializeIntoWindowsDeviceADAccount } from './deserializeIntoWindowsDeviceADAccount';
import { deserializeIntoWindowsDeviceAzureADAccount } from './deserializeIntoWindowsDeviceAzureADAccount';
import { type WindowsDeviceAccount, type WindowsDeviceADAccount, type WindowsDeviceAzureADAccount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

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
