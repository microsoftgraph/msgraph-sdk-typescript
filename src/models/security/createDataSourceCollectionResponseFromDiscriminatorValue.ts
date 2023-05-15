import {deserializeIntoDataSourceCollectionResponse} from './deserializeIntoDataSourceCollectionResponse';
import {DataSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDataSourceCollectionResponse;
}
