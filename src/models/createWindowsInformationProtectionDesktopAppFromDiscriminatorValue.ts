import {deserializeIntoWindowsInformationProtectionDesktopApp} from './deserializeIntoWindowsInformationProtectionDesktopApp';
import {WindowsInformationProtectionDesktopApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDesktopAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionDesktopApp;
}
