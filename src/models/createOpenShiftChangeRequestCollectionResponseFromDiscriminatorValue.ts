import { deserializeIntoOpenShiftChangeRequestCollectionResponse } from './deserializeIntoOpenShiftChangeRequestCollectionResponse';
import { type OpenShiftChangeRequestCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShiftChangeRequestCollectionResponse;
}
