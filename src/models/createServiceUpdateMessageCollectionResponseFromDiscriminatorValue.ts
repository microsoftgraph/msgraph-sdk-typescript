import {deserializeIntoServiceUpdateMessageCollectionResponse} from './deserializeIntoServiceUpdateMessageCollectionResponse';
import {ServiceUpdateMessageCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUpdateMessageCollectionResponse;
}
