import { deserializeIntoWorkflowBase } from './deserializeIntoWorkflowBase';
import { type WorkflowVersion } from './workflowVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowVersion(workflowVersion: WorkflowVersion | undefined = {} as WorkflowVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowBase(workflowVersion),
        "versionNumber": n => { workflowVersion.versionNumber = n.getNumberValue(); },
    }
}
