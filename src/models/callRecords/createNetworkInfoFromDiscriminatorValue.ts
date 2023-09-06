import { deserializeIntoNetworkInfo } from './deserializeIntoNetworkInfo';
import { type NetworkInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createNetworkInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoNetworkInfo;
}
