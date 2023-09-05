import { createDataSourceFromDiscriminatorValue } from './createDataSourceFromDiscriminatorValue';
import { createEdiscoveryIndexOperationFromDiscriminatorValue } from './createEdiscoveryIndexOperationFromDiscriminatorValue';
import { type DataSource } from './dataSource';
import { deserializeIntoDataSourceContainer } from './deserializeIntoDataSourceContainer';
import { type EdiscoveryIndexOperation } from './ediscoveryIndexOperation';
import { type EdiscoveryNoncustodialDataSource } from './ediscoveryNoncustodialDataSource';
import { serializeDataSource } from './serializeDataSource';
import { serializeEdiscoveryIndexOperation } from './serializeEdiscoveryIndexOperation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryNoncustodialDataSource(ediscoveryNoncustodialDataSource: EdiscoveryNoncustodialDataSource | undefined = {} as EdiscoveryNoncustodialDataSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSourceContainer(ediscoveryNoncustodialDataSource),
        "dataSource": n => { ediscoveryNoncustodialDataSource.dataSource = n.getObjectValue<DataSource>(createDataSourceFromDiscriminatorValue); },
        "lastIndexOperation": n => { ediscoveryNoncustodialDataSource.lastIndexOperation = n.getObjectValue<EdiscoveryIndexOperation>(createEdiscoveryIndexOperationFromDiscriminatorValue); },
    }
}
