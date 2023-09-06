import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type UserSource } from './userSource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserSource[] | undefined;
}
