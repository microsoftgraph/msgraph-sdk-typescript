import {deserializeIntoWorkflowBase} from './deserializeIntoWorkflowBase';
import {WorkflowVersion} from './workflowVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowVersion(workflowVersion: WorkflowVersion | undefined = {} as WorkflowVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowBase(workflowVersion),
        "versionNumber": n => { workflowVersion.versionNumber = n.getNumberValue(); },
    }
}
