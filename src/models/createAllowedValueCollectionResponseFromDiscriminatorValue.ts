import { deserializeIntoAllowedValueCollectionResponse } from './deserializeIntoAllowedValueCollectionResponse';
import { type AllowedValueCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAllowedValueCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAllowedValueCollectionResponse;
}
