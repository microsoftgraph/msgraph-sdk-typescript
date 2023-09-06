import { deserializeIntoWorkflowVersionCollectionResponse } from './deserializeIntoWorkflowVersionCollectionResponse';
import { type WorkflowVersionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowVersionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowVersionCollectionResponse;
}
