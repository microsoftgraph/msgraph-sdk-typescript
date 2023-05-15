import {DataSource} from './dataSource';
import {DataSourceScopes} from './dataSourceScopes';
import {EdiscoveryAddToReviewSetOperation} from './ediscoveryAddToReviewSetOperation';
import {EdiscoveryEstimateOperation} from './ediscoveryEstimateOperation';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeDataSource} from './serializeDataSource';
import {serializeEdiscoveryAddToReviewSetOperation} from './serializeEdiscoveryAddToReviewSetOperation';
import {serializeEdiscoveryEstimateOperation} from './serializeEdiscoveryEstimateOperation';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {serializeSearch} from './serializeSearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoverySearch(writer: SerializationWriter, ediscoverySearch: EdiscoverySearch | undefined = {} as EdiscoverySearch) : void {
        serializeSearch(writer, ediscoverySearch)
        writer.writeCollectionOfObjectValues<DataSource>("additionalSources", ediscoverySearch.additionalSources, serializeDataSource);
        writer.writeObjectValue<EdiscoveryAddToReviewSetOperation>("addToReviewSetOperation", ediscoverySearch.addToReviewSetOperation, serializeEdiscoveryAddToReviewSetOperation);
        writer.writeCollectionOfObjectValues<DataSource>("custodianSources", ediscoverySearch.custodianSources, serializeDataSource);
        writer.writeEnumValue<DataSourceScopes>("dataSourceScopes", ediscoverySearch.dataSourceScopes);
        writer.writeObjectValue<EdiscoveryEstimateOperation>("lastEstimateStatisticsOperation", ediscoverySearch.lastEstimateStatisticsOperation, serializeEdiscoveryEstimateOperation);
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("noncustodialSources", ediscoverySearch.noncustodialSources, serializeEdiscoveryNoncustodialDataSource);
}
