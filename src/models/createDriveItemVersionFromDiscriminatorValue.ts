import { deserializeIntoDriveItemVersion } from './deserializeIntoDriveItemVersion';
import { type DriveItemVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDriveItemVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDriveItemVersion;
}
