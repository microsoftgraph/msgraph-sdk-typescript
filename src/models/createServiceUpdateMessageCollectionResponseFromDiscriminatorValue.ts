import { deserializeIntoServiceUpdateMessageCollectionResponse } from './deserializeIntoServiceUpdateMessageCollectionResponse';
import { type ServiceUpdateMessageCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceUpdateMessageCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUpdateMessageCollectionResponse;
}
