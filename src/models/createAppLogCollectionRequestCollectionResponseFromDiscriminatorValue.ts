import { deserializeIntoAppLogCollectionRequestCollectionResponse } from './deserializeIntoAppLogCollectionRequestCollectionResponse';
import { type AppLogCollectionRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAppLogCollectionRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppLogCollectionRequestCollectionResponse;
}
