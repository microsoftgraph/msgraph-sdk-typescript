import { deserializeIntoWindowsInformationProtectionAppLockerFile } from './deserializeIntoWindowsInformationProtectionAppLockerFile';
import { type WindowsInformationProtectionAppLockerFile } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionAppLockerFile;
}
