import {WindowsInformationProtectionPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionPolicyImpl();
}
