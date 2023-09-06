import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type OnlineMeeting } from './onlineMeeting';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface OnlineMeetingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: OnlineMeeting[] | undefined;
}
