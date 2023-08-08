import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {EdiscoveryCase} from './ediscoveryCase';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCaseCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryCase[] | undefined;
}
