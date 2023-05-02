import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ProfilePhoto} from './profilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhoto(profilePhoto: ProfilePhoto | undefined = {} as ProfilePhoto) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(profilePhoto),
        "height": n => { profilePhoto.height = n.getNumberValue(); },
        "width": n => { profilePhoto.width = n.getNumberValue(); },
    }
}
