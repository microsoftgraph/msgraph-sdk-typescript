import {WindowsPhone81CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81CompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81CompliancePolicy();
}
