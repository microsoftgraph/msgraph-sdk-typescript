import {deserializeIntoNetworkInfo} from './deserializeIntoNetworkInfo';
import {NetworkInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNetworkInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkInfo;
}
