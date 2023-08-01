import type {DataSource} from './dataSource';
import type {EdiscoveryIndexOperation} from './ediscoveryIndexOperation';
import type {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {serializeDataSource} from './serializeDataSource';
import {serializeDataSourceContainer} from './serializeDataSourceContainer';
import {serializeEdiscoveryIndexOperation} from './serializeEdiscoveryIndexOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryNoncustodialDataSource(writer: SerializationWriter, ediscoveryNoncustodialDataSource: EdiscoveryNoncustodialDataSource | undefined = {} as EdiscoveryNoncustodialDataSource) : void {
        serializeDataSourceContainer(writer, ediscoveryNoncustodialDataSource)
        writer.writeObjectValue<DataSource>("dataSource", ediscoveryNoncustodialDataSource.dataSource, serializeDataSource);
        writer.writeObjectValue<EdiscoveryIndexOperation>("lastIndexOperation", ediscoveryNoncustodialDataSource.lastIndexOperation, serializeEdiscoveryIndexOperation);
}
