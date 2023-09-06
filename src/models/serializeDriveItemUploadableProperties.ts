import { type DriveItemUploadableProperties } from './driveItemUploadableProperties';
import { type FileSystemInfo } from './fileSystemInfo';
import { serializeFileSystemInfo } from './serializeFileSystemInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDriveItemUploadableProperties(writer: SerializationWriter, driveItemUploadableProperties: DriveItemUploadableProperties | undefined = {} as DriveItemUploadableProperties) : void {
        writer.writeStringValue("description", driveItemUploadableProperties.description);
        writer.writeNumberValue("fileSize", driveItemUploadableProperties.fileSize);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", driveItemUploadableProperties.fileSystemInfo, serializeFileSystemInfo);
        writer.writeStringValue("name", driveItemUploadableProperties.name);
        writer.writeStringValue("@odata.type", driveItemUploadableProperties.odataType);
        writer.writeAdditionalData(driveItemUploadableProperties.additionalData);
}
