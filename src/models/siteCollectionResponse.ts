import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type Site } from './site';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SiteCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Site[] | undefined;
}
