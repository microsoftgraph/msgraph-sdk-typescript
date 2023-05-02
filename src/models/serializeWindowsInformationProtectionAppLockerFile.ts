import {serializeEntity} from './serializeEntity';
import {WindowsInformationProtectionAppLockerFile} from './windowsInformationProtectionAppLockerFile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionAppLockerFile(writer: SerializationWriter, windowsInformationProtectionAppLockerFile: WindowsInformationProtectionAppLockerFile | undefined = {} as WindowsInformationProtectionAppLockerFile) : void {
        serializeEntity(writer, windowsInformationProtectionAppLockerFile)
        writer.writeStringValue("displayName", windowsInformationProtectionAppLockerFile.displayName);
        writer.writeStringValue("file", windowsInformationProtectionAppLockerFile.file);
        writer.writeStringValue("fileHash", windowsInformationProtectionAppLockerFile.fileHash);
        writer.writeStringValue("version", windowsInformationProtectionAppLockerFile.version);
}
