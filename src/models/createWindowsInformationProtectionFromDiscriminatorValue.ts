import {MdmWindowsInformationProtectionPolicy, WindowsInformationProtection, WindowsInformationProtectionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return new MdmWindowsInformationProtectionPolicy();
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return new WindowsInformationProtectionPolicy();
            }
        }
    }
    return new WindowsInformationProtection();
}
