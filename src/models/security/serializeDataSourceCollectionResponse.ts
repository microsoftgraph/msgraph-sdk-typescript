import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { type DataSource } from './dataSource';
import { type DataSourceCollectionResponse } from './dataSourceCollectionResponse';
import { serializeDataSource } from './serializeDataSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDataSourceCollectionResponse(writer: SerializationWriter, dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {} as DataSourceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<DataSource>("value", dataSourceCollectionResponse.value, serializeDataSource);
}
