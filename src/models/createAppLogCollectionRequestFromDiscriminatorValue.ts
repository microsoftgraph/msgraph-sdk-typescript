import { deserializeIntoAppLogCollectionRequest } from './deserializeIntoAppLogCollectionRequest';
import { type AppLogCollectionRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppLogCollectionRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionRequest;
}
