import {deserializeIntoHostComponentCollectionResponse} from './deserializeIntoHostComponentCollectionResponse';
import {HostComponentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHostComponentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostComponentCollectionResponse;
}
