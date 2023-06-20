import {DriveItemUploadableProperties} from './driveItemUploadableProperties';
import {FileSystemInfo} from './fileSystemInfo';
import {serializeFileSystemInfo} from './serializeFileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemUploadableProperties(driveItemUploadableProperties: DriveItemUploadableProperties | undefined = {} as DriveItemUploadableProperties, writer: SerializationWriter) : void {
        writer.writeStringValue("description", driveItemUploadableProperties.description);
        writer.writeNumberValue("fileSize", driveItemUploadableProperties.fileSize);
        writer.writeObjectValue<FileSystemInfo>("fileSystemInfo", driveItemUploadableProperties.fileSystemInfo, serializeFileSystemInfo);
        writer.writeStringValue("name", driveItemUploadableProperties.name);
        writer.writeStringValue("@odata.type", driveItemUploadableProperties.odataType);
        writer.writeAdditionalData(driveItemUploadableProperties.additionalData);
}
