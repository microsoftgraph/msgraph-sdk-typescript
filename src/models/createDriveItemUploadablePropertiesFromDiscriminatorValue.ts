import {DriveItemUploadablePropertiesImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemUploadablePropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : DriveItemUploadablePropertiesImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DriveItemUploadablePropertiesImpl();
}
