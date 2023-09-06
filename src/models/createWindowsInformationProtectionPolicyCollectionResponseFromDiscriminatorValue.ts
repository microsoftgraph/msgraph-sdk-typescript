import { deserializeIntoWindowsInformationProtectionPolicyCollectionResponse } from './deserializeIntoWindowsInformationProtectionPolicyCollectionResponse';
import { type WindowsInformationProtectionPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionPolicyCollectionResponse;
}
