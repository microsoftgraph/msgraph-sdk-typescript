import {WindowsInformationProtectionDesktopApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDesktopAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionDesktopApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionDesktopApp();
}
