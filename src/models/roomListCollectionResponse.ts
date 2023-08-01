import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {RoomList} from './roomList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoomList[] | undefined;
}
