import {CallRouteCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRouteCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : CallRouteCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CallRouteCollectionResponse();
}
