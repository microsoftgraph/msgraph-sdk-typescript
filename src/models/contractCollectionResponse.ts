import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {Contract} from './contract';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContractCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Contract[] | undefined;
}
