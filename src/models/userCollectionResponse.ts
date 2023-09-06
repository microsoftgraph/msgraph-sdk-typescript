import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type User } from './user';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface UserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: User[] | undefined;
}
