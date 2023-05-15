import {createDataSourceFromDiscriminatorValue} from './createDataSourceFromDiscriminatorValue';
import {createEdiscoveryIndexOperationFromDiscriminatorValue} from './createEdiscoveryIndexOperationFromDiscriminatorValue';
import {DataSource} from './dataSource';
import {deserializeIntoDataSourceContainer} from './deserializeIntoDataSourceContainer';
import {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {serializeDataSource} from './serializeDataSource';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryNoncustodialDataSource(ediscoveryNoncustodialDataSource: EdiscoveryNoncustodialDataSource | undefined = {} as EdiscoveryNoncustodialDataSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSourceContainer(ediscoveryNoncustodialDataSource),
        "dataSource": n => { ediscoveryNoncustodialDataSource.dataSource = n.getObjectValue<DataSource>(createDataSourceFromDiscriminatorValue); },
        "lastIndexOperation": n => { ediscoveryNoncustodialDataSource.lastIndexOperation = n.getObjectValue<EdiscoveryIndexOperation>(createEdiscoveryIndexOperationFromDiscriminatorValue); },
    }
}
