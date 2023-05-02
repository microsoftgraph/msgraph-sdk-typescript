import {ProfilePhoto} from './profilePhoto';
import {ProfilePhotoCollectionResponse} from './profilePhotoCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProfilePhotoCollectionResponse(writer: SerializationWriter, profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {} as ProfilePhotoCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, profilePhotoCollectionResponse)
        writer.writeCollectionOfObjectValues<ProfilePhoto>("value", profilePhotoCollectionResponse.value, serializeProfilePhoto);
}
