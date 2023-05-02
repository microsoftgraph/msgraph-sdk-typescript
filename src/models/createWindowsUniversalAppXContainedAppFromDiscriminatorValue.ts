import {deserializeIntoWindowsUniversalAppXContainedApp} from './deserializeIntoWindowsUniversalAppXContainedApp';
import {WindowsUniversalAppXContainedApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXContainedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsUniversalAppXContainedApp;
}
