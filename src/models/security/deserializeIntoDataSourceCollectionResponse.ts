import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createDataSourceFromDiscriminatorValue } from './createDataSourceFromDiscriminatorValue';
import { type DataSource } from './dataSource';
import { type DataSourceCollectionResponse } from './dataSourceCollectionResponse';
import { serializeDataSource } from './serializeDataSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSourceCollectionResponse(dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {} as DataSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(dataSourceCollectionResponse),
        "value": n => { dataSourceCollectionResponse.value = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
    }
}
