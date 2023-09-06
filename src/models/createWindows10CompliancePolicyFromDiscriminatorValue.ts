import { deserializeIntoWindows10CompliancePolicy } from './deserializeIntoWindows10CompliancePolicy';
import { type Windows10CompliancePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows10CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10CompliancePolicy;
}
