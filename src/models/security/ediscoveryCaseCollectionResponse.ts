import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoveryCase} from './ediscoveryCase';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryCase[] | undefined;
}
