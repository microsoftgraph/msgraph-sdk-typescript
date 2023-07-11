import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodianCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryCustodian[] | undefined;
}
