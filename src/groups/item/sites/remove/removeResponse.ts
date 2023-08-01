import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {Site} from '../../../../models/site';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoveResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Site[] | undefined;
}
