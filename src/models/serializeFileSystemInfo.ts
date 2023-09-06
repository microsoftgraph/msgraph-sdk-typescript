import { type FileSystemInfo } from './fileSystemInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFileSystemInfo(writer: SerializationWriter, fileSystemInfo: FileSystemInfo | undefined = {} as FileSystemInfo) : void {
        writer.writeDateValue("createdDateTime", fileSystemInfo.createdDateTime);
        writer.writeDateValue("lastAccessedDateTime", fileSystemInfo.lastAccessedDateTime);
        writer.writeDateValue("lastModifiedDateTime", fileSystemInfo.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", fileSystemInfo.odataType);
        writer.writeAdditionalData(fileSystemInfo.additionalData);
}
