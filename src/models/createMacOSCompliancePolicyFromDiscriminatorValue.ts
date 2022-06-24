import {MacOSCompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMacOSCompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MacOSCompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MacOSCompliancePolicyImpl();
}
