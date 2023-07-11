import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {BrowserSite} from './browserSite';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSiteCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BrowserSite[] | undefined;
}
