import {Windows10MobileCompliancePolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10MobileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10MobileCompliancePolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10MobileCompliancePolicy();
}
