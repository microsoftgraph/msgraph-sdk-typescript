import { deserializeIntoWorkflowTemplate } from './deserializeIntoWorkflowTemplate';
import { type WorkflowTemplate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowTemplate;
}
