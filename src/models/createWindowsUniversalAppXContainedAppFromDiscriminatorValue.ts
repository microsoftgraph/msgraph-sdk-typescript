import {WindowsUniversalAppXContainedApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsUniversalAppXContainedAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsUniversalAppXContainedApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsUniversalAppXContainedApp();
}
