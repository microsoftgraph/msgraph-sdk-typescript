import { deserializeIntoWorkflowVersion } from './deserializeIntoWorkflowVersion';
import { type WorkflowVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWorkflowVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWorkflowVersion;
}
