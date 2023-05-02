import {FileSystemInfo} from './fileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSystemInfo(writer: SerializationWriter, fileSystemInfo: FileSystemInfo | undefined = {} as FileSystemInfo) : void {
        writer.writeDateValue("createdDateTime", fileSystemInfo.createdDateTime);
        writer.writeDateValue("lastAccessedDateTime", fileSystemInfo.lastAccessedDateTime);
        writer.writeDateValue("lastModifiedDateTime", fileSystemInfo.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", fileSystemInfo.odataType);
        writer.writeAdditionalData(fileSystemInfo.additionalData);
}
