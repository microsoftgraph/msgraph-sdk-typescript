import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {OnlineMeeting} from './onlineMeeting';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeetingCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: OnlineMeeting[] | undefined;
}
