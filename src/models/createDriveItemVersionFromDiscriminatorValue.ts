import {deserializeIntoDriveItemVersion} from './deserializeIntoDriveItemVersion';
import {DriveItemVersion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDriveItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemVersion;
}
