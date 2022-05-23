import {WindowsInformationProtectionAppLockerFileImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionAppLockerFileImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionAppLockerFileImpl();
}
