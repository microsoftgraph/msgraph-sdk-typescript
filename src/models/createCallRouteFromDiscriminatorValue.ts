import {deserializeIntoCallRoute} from './deserializeIntoCallRoute';
import {CallRoute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCallRouteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCallRoute;
}
