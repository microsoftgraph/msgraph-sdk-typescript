import {deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse} from './deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse';
import {MdmWindowsInformationProtectionPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse;
}
