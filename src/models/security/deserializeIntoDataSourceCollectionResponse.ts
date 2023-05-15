import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createDataSourceFromDiscriminatorValue} from './createDataSourceFromDiscriminatorValue';
import {DataSource} from './dataSource';
import {DataSourceCollectionResponse} from './dataSourceCollectionResponse';
import {serializeDataSource} from './serializeDataSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataSourceCollectionResponse(dataSourceCollectionResponse: DataSourceCollectionResponse | undefined = {} as DataSourceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(dataSourceCollectionResponse),
        "value": n => { dataSourceCollectionResponse.value = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
    }
}
