import {EdiscoveryNoncustodialDataSourceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryNoncustodialDataSourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryNoncustodialDataSourceCollectionResponse();
}
