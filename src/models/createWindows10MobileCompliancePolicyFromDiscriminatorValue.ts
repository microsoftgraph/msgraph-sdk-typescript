import {deserializeIntoWindows10MobileCompliancePolicy} from './deserializeIntoWindows10MobileCompliancePolicy';
import {Windows10MobileCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10MobileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10MobileCompliancePolicy;
}
