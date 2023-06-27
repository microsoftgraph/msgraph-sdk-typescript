import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Domain} from './domain';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Domain[] | undefined;
}
