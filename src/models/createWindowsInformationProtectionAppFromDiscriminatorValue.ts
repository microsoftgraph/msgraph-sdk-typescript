import {WindowsInformationProtectionAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionAppImpl();
}
