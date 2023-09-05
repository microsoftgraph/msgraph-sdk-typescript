import { deserializeIntoExtensionPropertyCollectionResponse } from './deserializeIntoExtensionPropertyCollectionResponse';
import { type ExtensionPropertyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExtensionPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExtensionPropertyCollectionResponse;
}
