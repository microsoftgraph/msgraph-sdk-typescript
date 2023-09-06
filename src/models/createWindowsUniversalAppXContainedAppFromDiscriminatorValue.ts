import { deserializeIntoWindowsUniversalAppXContainedApp } from './deserializeIntoWindowsUniversalAppXContainedApp';
import { type WindowsUniversalAppXContainedApp } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXContainedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppXContainedApp;
}
