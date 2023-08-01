import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ProfilePhoto} from './profilePhoto';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProfilePhotoCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ProfilePhoto[] | undefined;
}
