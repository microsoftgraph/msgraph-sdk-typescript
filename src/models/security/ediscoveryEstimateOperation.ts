import {CaseOperation} from './caseOperation';
import {EdiscoverySearch} from './ediscoverySearch';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryEstimateOperation extends CaseOperation, Parsable {
    /**
     * The estimated count of items for the search that matched the content query.
     */
    indexedItemCount?: number | undefined;
    /**
     * The estimated size of items for the search that matched the content query.
     */
    indexedItemsSize?: number | undefined;
    /**
     * The number of mailboxes that had search hits.
     */
    mailboxCount?: number | undefined;
    /**
     * eDiscovery search.
     */
    search?: EdiscoverySearch | undefined;
    /**
     * The number of mailboxes that had search hits.
     */
    siteCount?: number | undefined;
    /**
     * The estimated count of unindexed items for the collection.
     */
    unindexedItemCount?: number | undefined;
    /**
     * The estimated size of unindexed items for the collection.
     */
    unindexedItemsSize?: number | undefined;
}
