import { deserializeIntoMdmWindowsInformationProtectionPolicy } from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import { deserializeIntoWindowsInformationProtection } from './deserializeIntoWindowsInformationProtection';
import { deserializeIntoWindowsInformationProtectionPolicy } from './deserializeIntoWindowsInformationProtectionPolicy';
import { type MdmWindowsInformationProtectionPolicy, type WindowsInformationProtection, type WindowsInformationProtectionPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.mdmWindowsInformationProtectionPolicy":
                    return deserializeIntoMdmWindowsInformationProtectionPolicy;
                case "#microsoft.graph.windowsInformationProtectionPolicy":
                    return deserializeIntoWindowsInformationProtectionPolicy;
            }
        }
    }
    return deserializeIntoWindowsInformationProtection;
}
