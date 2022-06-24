import {Windows81CompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows81CompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows81CompliancePolicyImpl();
}
