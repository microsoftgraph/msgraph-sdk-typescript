import type {BaseCollectionPaginationCountResponse} from '../../../../models/baseCollectionPaginationCountResponse';
import type {Site} from '../../../../models/site';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface GetAllSitesResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Site[] | undefined;
}
