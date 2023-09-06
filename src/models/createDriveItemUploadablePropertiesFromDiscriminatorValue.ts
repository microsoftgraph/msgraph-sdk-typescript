import { deserializeIntoDriveItemUploadableProperties } from './deserializeIntoDriveItemUploadableProperties';
import { type DriveItemUploadableProperties } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveItemUploadablePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemUploadableProperties;
}
