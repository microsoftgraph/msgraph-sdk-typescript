import { deserializeIntoOpenShiftCollectionResponse } from './deserializeIntoOpenShiftCollectionResponse';
import { type OpenShiftCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOpenShiftCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShiftCollectionResponse;
}
