import { deserializeIntoExternalGroupCollectionResponse } from './deserializeIntoExternalGroupCollectionResponse';
import { type ExternalGroupCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalGroupCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalGroupCollectionResponse;
}
