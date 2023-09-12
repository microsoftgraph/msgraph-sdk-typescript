import { deserializeIntoServiceHealthCollectionResponse } from './deserializeIntoServiceHealthCollectionResponse';
import { type ServiceHealthCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceHealthCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceHealthCollectionResponse;
}
