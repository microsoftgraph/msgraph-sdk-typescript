import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {RoomList} from './roomList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomListCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoomList[] | undefined;
}
