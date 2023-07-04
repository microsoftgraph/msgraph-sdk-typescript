import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {User} from './user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: User[] | undefined;
}
