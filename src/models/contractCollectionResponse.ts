import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {Contract} from './contract';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContractCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Contract[] | undefined;
}
