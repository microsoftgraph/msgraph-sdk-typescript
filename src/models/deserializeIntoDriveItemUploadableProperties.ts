import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {DriveItemUploadableProperties} from './driveItemUploadableProperties';
import {FileSystemInfo} from './fileSystemInfo';
import {serializeFileSystemInfo} from './serializeFileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemUploadableProperties(driveItemUploadableProperties: DriveItemUploadableProperties | undefined = {} as DriveItemUploadableProperties) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { driveItemUploadableProperties.description = n.getStringValue(); },
        "fileSize": n => { driveItemUploadableProperties.fileSize = n.getNumberValue(); },
        "fileSystemInfo": n => { driveItemUploadableProperties.fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); },
        "name": n => { driveItemUploadableProperties.name = n.getStringValue(); },
        "@odata.type": n => { driveItemUploadableProperties.odataType = n.getStringValue(); },
    }
}
