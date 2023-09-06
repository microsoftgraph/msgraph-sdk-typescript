import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type SiteSource } from './siteSource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SiteSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SiteSource[] | undefined;
}
