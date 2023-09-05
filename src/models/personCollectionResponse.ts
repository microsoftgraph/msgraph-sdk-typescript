import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Person } from './person';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PersonCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Person[] | undefined;
}
