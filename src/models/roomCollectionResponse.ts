import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Room} from './room';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Room[] | undefined;
}
