import {WindowsInformationProtectionDesktopAppImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDesktopAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionDesktopAppImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionDesktopAppImpl();
}
