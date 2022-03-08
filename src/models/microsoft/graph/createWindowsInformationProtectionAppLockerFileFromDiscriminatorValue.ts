import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppLockerFile {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionAppLockerFile();
}
