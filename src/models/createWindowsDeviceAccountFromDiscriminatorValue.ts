import {WindowsDeviceAccountImpl, WindowsDeviceADAccountImpl, WindowsDeviceAzureADAccountImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDeviceAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsDeviceAccountImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsDeviceADAccount":
                    return new WindowsDeviceADAccountImpl();
                case "#microsoft.graph.windowsDeviceAzureADAccount":
                    return new WindowsDeviceAzureADAccountImpl();
            }
        }
    }
    return new WindowsDeviceAccountImpl();
}
