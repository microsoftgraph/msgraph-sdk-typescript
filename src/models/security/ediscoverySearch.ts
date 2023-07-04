import {DataSource} from './dataSource';
import {DataSourceScopes} from './dataSourceScopes';
import {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import {EdiscoveryEstimateOperation} from './ediscoveryEstimateOperation';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {Search} from './search';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoverySearch extends Parsable, Search {
    /**
     * Adds an additional source to the eDiscovery search.
     */
    additionalSources?: DataSource[] | undefined;
    /**
     * Adds the results of the eDiscovery search to the specified reviewSet.
     */
    addToReviewSetOperation?: EdiscoveryAddToReviewSetOperation | undefined;
    /**
     * Custodian sources that are included in the eDiscovery search.
     */
    custodianSources?: DataSource[] | undefined;
    /**
     * When specified, the collection will span across a service for an entire workload. Possible values are: none, allTenantMailboxes, allTenantSites, allCaseCustodians, allCaseNoncustodialDataSources.
     */
    dataSourceScopes?: DataSourceScopes | undefined;
    /**
     * The last estimate operation associated with the eDiscovery search.
     */
    lastEstimateStatisticsOperation?: EdiscoveryEstimateOperation | undefined;
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     */
    noncustodialSources?: EdiscoveryNoncustodialDataSource[] | undefined;
}
