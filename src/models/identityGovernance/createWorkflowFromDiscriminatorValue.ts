import { deserializeIntoWorkflow } from './deserializeIntoWorkflow';
import { type Workflow } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflow;
}
