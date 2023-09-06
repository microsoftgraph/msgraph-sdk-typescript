import { deserializeIntoBaseItemVersion } from './deserializeIntoBaseItemVersion';
import { type DriveItemVersion } from './driveItemVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItemVersion(driveItemVersion: DriveItemVersion | undefined = {} as DriveItemVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItemVersion(driveItemVersion),
        "content": n => { driveItemVersion.content = n.getStringValue(); },
        "size": n => { driveItemVersion.size = n.getNumberValue(); },
    }
}
