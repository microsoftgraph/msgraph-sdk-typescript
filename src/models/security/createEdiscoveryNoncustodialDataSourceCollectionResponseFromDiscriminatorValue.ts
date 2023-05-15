import {deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse} from './deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryNoncustodialDataSourceCollectionResponse;
}
