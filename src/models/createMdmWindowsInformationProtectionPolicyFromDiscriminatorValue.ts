import {MdmWindowsInformationProtectionPolicyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MdmWindowsInformationProtectionPolicyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MdmWindowsInformationProtectionPolicyImpl();
}
