import {Windows81CompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81CompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81CompliancePolicy();
}
