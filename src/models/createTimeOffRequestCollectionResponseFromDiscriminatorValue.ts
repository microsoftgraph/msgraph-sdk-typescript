import { deserializeIntoTimeOffRequestCollectionResponse } from './deserializeIntoTimeOffRequestCollectionResponse';
import { type TimeOffRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTimeOffRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTimeOffRequestCollectionResponse;
}
