import {MdmWindowsInformationProtectionPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MdmWindowsInformationProtectionPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MdmWindowsInformationProtectionPolicyCollectionResponseImpl();
}
