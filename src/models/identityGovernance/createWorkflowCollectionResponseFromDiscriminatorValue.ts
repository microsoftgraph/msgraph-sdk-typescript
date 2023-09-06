import { deserializeIntoWorkflowCollectionResponse } from './deserializeIntoWorkflowCollectionResponse';
import { type WorkflowCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowCollectionResponse;
}
