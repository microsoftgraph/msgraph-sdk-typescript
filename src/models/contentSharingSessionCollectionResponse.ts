import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ContentSharingSession} from './contentSharingSession';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentSharingSessionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ContentSharingSession[] | undefined;
}
