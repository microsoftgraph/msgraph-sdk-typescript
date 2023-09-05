import { deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse } from './deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse';
import { type MdmWindowsInformationProtectionPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMdmWindowsInformationProtectionPolicyCollectionResponse;
}
