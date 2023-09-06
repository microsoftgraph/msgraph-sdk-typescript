import { type ProfilePhoto } from './profilePhoto';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeProfilePhoto(writer: SerializationWriter, profilePhoto: ProfilePhoto | undefined = {} as ProfilePhoto) : void {
        serializeEntity(writer, profilePhoto)
        writer.writeNumberValue("height", profilePhoto.height);
        writer.writeNumberValue("width", profilePhoto.width);
}
