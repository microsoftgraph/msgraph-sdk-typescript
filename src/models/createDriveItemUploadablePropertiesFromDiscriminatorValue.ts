import {deserializeIntoDriveItemUploadableProperties} from './deserializeIntoDriveItemUploadableProperties';
import {DriveItemUploadableProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemUploadablePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemUploadableProperties;
}
