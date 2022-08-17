import {MacOSCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCompliancePolicy();
}
