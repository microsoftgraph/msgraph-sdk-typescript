import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Session} from './session';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SessionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Session[] | undefined;
}
