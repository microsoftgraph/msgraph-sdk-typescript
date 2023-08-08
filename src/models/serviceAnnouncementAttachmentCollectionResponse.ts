import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {ServiceAnnouncementAttachment} from './serviceAnnouncementAttachment';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServiceAnnouncementAttachment[] | undefined;
}
