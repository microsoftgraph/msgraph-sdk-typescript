import {WindowsInformationProtectionPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionPolicyCollectionResponseImpl();
}
