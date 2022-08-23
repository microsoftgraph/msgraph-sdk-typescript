import {WindowsDeviceAccount, WindowsDeviceADAccount, WindowsDeviceAzureADAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsDeviceADAccount":
                    return new WindowsDeviceADAccount();
                case "#microsoft.graph.windowsDeviceAzureADAccount":
                    return new WindowsDeviceAzureADAccount();
            }
        }
    }
    return new WindowsDeviceAccount();
}
