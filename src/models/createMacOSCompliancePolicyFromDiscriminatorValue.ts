import { deserializeIntoMacOSCompliancePolicy } from './deserializeIntoMacOSCompliancePolicy';
import { type MacOSCompliancePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMacOSCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMacOSCompliancePolicy;
}
