import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Domain } from './domain';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DomainCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Domain[] | undefined;
}
