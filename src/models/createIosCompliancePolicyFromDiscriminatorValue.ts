import { deserializeIntoIosCompliancePolicy } from './deserializeIntoIosCompliancePolicy';
import { type IosCompliancePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIosCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIosCompliancePolicy;
}
