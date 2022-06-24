import {Windows10MobileCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10MobileCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10MobileCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10MobileCompliancePolicyImpl();
}
