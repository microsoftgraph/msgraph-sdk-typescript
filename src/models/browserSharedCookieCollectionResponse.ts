import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {BrowserSharedCookie} from './browserSharedCookie';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface BrowserSharedCookieCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: BrowserSharedCookie[] | undefined;
}
