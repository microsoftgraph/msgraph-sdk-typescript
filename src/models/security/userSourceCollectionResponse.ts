import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {UserSource} from './userSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserSource[] | undefined;
}
