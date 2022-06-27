import {WindowsInformationProtectionStoreAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionStoreAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionStoreAppImpl();
}
