import { deserializeIntoResourceSpecificPermissionGrantCollectionResponse } from './deserializeIntoResourceSpecificPermissionGrantCollectionResponse';
import { type ResourceSpecificPermissionGrantCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceSpecificPermissionGrantCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceSpecificPermissionGrantCollectionResponse;
}
