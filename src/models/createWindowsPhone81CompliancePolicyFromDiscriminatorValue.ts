import {deserializeIntoWindowsPhone81CompliancePolicy} from './deserializeIntoWindowsPhone81CompliancePolicy';
import {WindowsPhone81CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsPhone81CompliancePolicy;
}
