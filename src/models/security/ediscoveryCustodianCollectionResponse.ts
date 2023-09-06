import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type EdiscoveryCustodian } from './ediscoveryCustodian';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoveryCustodianCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryCustodian[] | undefined;
}
