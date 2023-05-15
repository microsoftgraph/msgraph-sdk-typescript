import {deserializeIntoWindowsInformationProtectionAppLockerFile} from './deserializeIntoWindowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFile} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLockerFile;
}
