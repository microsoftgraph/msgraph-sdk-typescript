import {WindowsInformationProtectionAppImpl, WindowsInformationProtectionDesktopAppImpl, WindowsInformationProtectionStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.windowsInformationProtectionDesktopApp":
                    return new WindowsInformationProtectionDesktopAppImpl();
                case "#microsoft.graph.windowsInformationProtectionStoreApp":
                    return new WindowsInformationProtectionStoreAppImpl();
            }
        }
    }
    return new WindowsInformationProtectionAppImpl();
}
