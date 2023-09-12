import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Group } from './group';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface GroupCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Group[] | undefined;
}
