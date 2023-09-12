import { deserializeIntoWorkflowTemplateCollectionResponse } from './deserializeIntoWorkflowTemplateCollectionResponse';
import { type WorkflowTemplateCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowTemplateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowTemplateCollectionResponse;
}
