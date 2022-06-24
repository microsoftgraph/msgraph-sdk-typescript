import {MdmWindowsInformationProtectionPolicyImpl, WindowsInformationProtectionImpl, WindowsInformationProtectionPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return new MdmWindowsInformationProtectionPolicyImpl();
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return new WindowsInformationProtectionPolicyImpl();
            }
        }
    }
    return new WindowsInformationProtectionImpl();
}
