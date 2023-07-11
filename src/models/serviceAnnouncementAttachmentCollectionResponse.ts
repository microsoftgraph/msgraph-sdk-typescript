import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServiceAnnouncementAttachment[] | undefined;
}
