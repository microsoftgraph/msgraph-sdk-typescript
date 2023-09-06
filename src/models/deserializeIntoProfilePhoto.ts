import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ProfilePhoto } from './profilePhoto';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhoto(profilePhoto: ProfilePhoto | undefined = {} as ProfilePhoto) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(profilePhoto),
        "height": n => { profilePhoto.height = n.getNumberValue(); },
        "width": n => { profilePhoto.width = n.getNumberValue(); },
    }
}
