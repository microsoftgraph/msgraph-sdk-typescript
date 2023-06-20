import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {DataSource} from './dataSource';
import {DataSourceCollectionResponse} from './dataSourceCollectionResponse';
import {serializeDataSource} from './serializeDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDataSourceCollectionResponse(dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {} as DataSourceCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, dataSourceCollectionResponse)
        writer.writeCollectionOfObjectValues<DataSource>("value", dataSourceCollectionResponse.value, serializeDataSource);
}
