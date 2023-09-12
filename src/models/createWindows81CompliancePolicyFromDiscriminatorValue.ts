import { deserializeIntoWindows81CompliancePolicy } from './deserializeIntoWindows81CompliancePolicy';
import { type Windows81CompliancePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows81CompliancePolicy;
}
