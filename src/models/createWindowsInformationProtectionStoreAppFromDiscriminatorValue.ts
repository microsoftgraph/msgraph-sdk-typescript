import {deserializeIntoWindowsInformationProtectionStoreApp} from './deserializeIntoWindowsInformationProtectionStoreApp';
import {WindowsInformationProtectionStoreApp} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionStoreAppFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionStoreApp;
}
