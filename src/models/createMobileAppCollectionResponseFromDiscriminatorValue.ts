import { deserializeIntoMobileAppCollectionResponse } from './deserializeIntoMobileAppCollectionResponse';
import { type MobileAppCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppCollectionResponse;
}
