import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {ProfilePhoto} from './profilePhoto';
import type {ProfilePhotoCollectionResponse} from './profilePhotoCollectionResponse';
import {serializeProfilePhoto} from './serializeProfilePhoto';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfilePhotoCollectionResponse(profilePhotoCollectionResponse: ProfilePhotoCollectionResponse | undefined = {} as ProfilePhotoCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(profilePhotoCollectionResponse),
        "value": n => { profilePhotoCollectionResponse.value = n.getCollectionOfObjectValues<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
    }
}
