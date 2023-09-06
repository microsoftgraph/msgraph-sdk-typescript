import { type DriveItemVersion } from './driveItemVersion';
import { serializeBaseItemVersion } from './serializeBaseItemVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersion(writer: SerializationWriter, driveItemVersion: DriveItemVersion | undefined = {} as DriveItemVersion) : void {
        serializeBaseItemVersion(writer, driveItemVersion)
        writer.writeStringValue("content", driveItemVersion.content);
        writer.writeNumberValue("size", driveItemVersion.size);
}
