import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BrowserSite} from './browserSite';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSiteCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BrowserSite[] | undefined;
}
