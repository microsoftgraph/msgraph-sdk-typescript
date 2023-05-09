import {deserializeIntoEntity} from './deserializeIntoEntity';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLockerFile(windowsInformationProtectionAppLockerFile: WindowsInformationProtectionAppLockerFile | undefined = {} as WindowsInformationProtectionAppLockerFile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsInformationProtectionAppLockerFile),
        "displayName": n => { windowsInformationProtectionAppLockerFile.displayName = n.getStringValue(); },
        "file": n => { windowsInformationProtectionAppLockerFile.file = n.getStringValue(); },
        "fileHash": n => { windowsInformationProtectionAppLockerFile.fileHash = n.getStringValue(); },
        "version": n => { windowsInformationProtectionAppLockerFile.version = n.getStringValue(); },
    }
}
