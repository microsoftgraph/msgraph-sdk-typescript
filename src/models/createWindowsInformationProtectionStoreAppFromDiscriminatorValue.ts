import {WindowsInformationProtectionStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionStoreApp {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionStoreApp();
}
