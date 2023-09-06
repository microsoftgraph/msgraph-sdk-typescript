import { deserializeIntoWindowsInformationProtectionPolicy } from './deserializeIntoWindowsInformationProtectionPolicy';
import { type WindowsInformationProtectionPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionPolicy;
}
