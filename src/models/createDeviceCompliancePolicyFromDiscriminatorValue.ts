import {DeviceCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeviceCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeviceCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.deviceCompliancePolicy":
                    return new DeviceCompliancePolicy();
            }
        }
    }
    return new DeviceCompliancePolicy();
}
