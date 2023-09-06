import { deserializeIntoWindowsInformationProtectionDesktopApp } from './deserializeIntoWindowsInformationProtectionDesktopApp';
import { type WindowsInformationProtectionDesktopApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionDesktopAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionDesktopApp;
}
