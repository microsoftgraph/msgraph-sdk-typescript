import { deserializeIntoCustomCalloutExtensionCollectionResponse } from './deserializeIntoCustomCalloutExtensionCollectionResponse';
import { type CustomCalloutExtensionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCustomCalloutExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomCalloutExtensionCollectionResponse;
}
