import { deserializeIntoPersonCollectionResponse } from './deserializeIntoPersonCollectionResponse';
import { type PersonCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPersonCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPersonCollectionResponse;
}
