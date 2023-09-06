import { deserializeIntoMdmWindowsInformationProtectionPolicy } from './deserializeIntoMdmWindowsInformationProtectionPolicy';
import { type MdmWindowsInformationProtectionPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMdmWindowsInformationProtectionPolicy;
}
