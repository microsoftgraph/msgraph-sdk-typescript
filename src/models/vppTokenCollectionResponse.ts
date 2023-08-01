import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {VppToken} from './vppToken';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VppTokenCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: VppToken[] | undefined;
}
