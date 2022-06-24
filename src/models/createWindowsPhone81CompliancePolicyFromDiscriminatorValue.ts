import {WindowsPhone81CompliancePolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsPhone81CompliancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsPhone81CompliancePolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsPhone81CompliancePolicyImpl();
}
