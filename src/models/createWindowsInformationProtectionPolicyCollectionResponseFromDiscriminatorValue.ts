import {deserializeIntoWindowsInformationProtectionPolicyCollectionResponse} from './deserializeIntoWindowsInformationProtectionPolicyCollectionResponse';
import {WindowsInformationProtectionPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionPolicyCollectionResponse;
}
