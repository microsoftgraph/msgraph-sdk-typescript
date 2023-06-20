import {DriveItemVersion} from './driveItemVersion';
import {serializeBaseItemVersion} from './serializeBaseItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersion(driveItemVersion: DriveItemVersion | undefined = {} as DriveItemVersion, writer: SerializationWriter) : void {
        serializeBaseItemVersion(writer, driveItemVersion)
        writer.writeStringValue("content", driveItemVersion.content);
        writer.writeNumberValue("size", driveItemVersion.size);
}
