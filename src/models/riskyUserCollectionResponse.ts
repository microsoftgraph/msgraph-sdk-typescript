import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type RiskyUser } from './riskyUser';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RiskyUserCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RiskyUser[] | undefined;
}
