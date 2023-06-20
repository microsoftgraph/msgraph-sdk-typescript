import {FileSystemInfo} from './fileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFileSystemInfo(fileSystemInfo: FileSystemInfo | undefined = {} as FileSystemInfo, writer: SerializationWriter) : void {
        writer.writeDateValue("createdDateTime", fileSystemInfo.createdDateTime);
        writer.writeDateValue("lastAccessedDateTime", fileSystemInfo.lastAccessedDateTime);
        writer.writeDateValue("lastModifiedDateTime", fileSystemInfo.lastModifiedDateTime);
        writer.writeStringValue("@odata.type", fileSystemInfo.odataType);
        writer.writeAdditionalData(fileSystemInfo.additionalData);
}
