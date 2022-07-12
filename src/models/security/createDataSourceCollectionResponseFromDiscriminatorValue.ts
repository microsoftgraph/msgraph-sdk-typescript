import {DataSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataSourceCollectionResponse();
}
