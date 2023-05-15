import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Room} from './room';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Room[] | undefined;
}
