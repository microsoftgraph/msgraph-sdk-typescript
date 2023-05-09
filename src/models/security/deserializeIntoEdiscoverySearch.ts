import {createDataSourceFromDiscriminatorValue} from './createDataSourceFromDiscriminatorValue';
import {createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue} from './createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue';
import {createEdiscoveryEstimateOperationFromDiscriminatorValue} from './createEdiscoveryEstimateOperationFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from './createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {DataSource} from './dataSource';
import {DataSourceScopes} from './dataSourceScopes';
import {deserializeIntoSearch} from './deserializeIntoSearch';
import {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import {EdiscoveryEstimateOperation} from './ediscoveryEstimateOperation';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeDataSource} from './serializeDataSource';
import {serializeEdiscoveryAddToReviewSetOperation} from './serializeEdiscoveryAddToReviewSetOperation';
import {serializeEdiscoveryEstimateOperation} from './serializeEdiscoveryEstimateOperation';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoverySearch(ediscoverySearch: EdiscoverySearch | undefined = {} as EdiscoverySearch) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSearch(ediscoverySearch),
        "additionalSources": n => { ediscoverySearch.additionalSources = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
        "addToReviewSetOperation": n => { ediscoverySearch.addToReviewSetOperation = n.getObjectValue<EdiscoveryAddToReviewSetOperation>(createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue); },
        "custodianSources": n => { ediscoverySearch.custodianSources = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
        "dataSourceScopes": n => { ediscoverySearch.dataSourceScopes = n.getEnumValue<DataSourceScopes>(DataSourceScopes); },
        "lastEstimateStatisticsOperation": n => { ediscoverySearch.lastEstimateStatisticsOperation = n.getObjectValue<EdiscoveryEstimateOperation>(createEdiscoveryEstimateOperationFromDiscriminatorValue); },
        "noncustodialSources": n => { ediscoverySearch.noncustodialSources = n.getCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>(createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue); },
    }
}
