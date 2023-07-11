import {serializeWorkflowBase} from './serializeWorkflowBase';
import {WorkflowVersion} from './workflowVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowVersion(writer: SerializationWriter, workflowVersion: WorkflowVersion | undefined = {} as WorkflowVersion) : void {
        serializeWorkflowBase(writer, workflowVersion)
        writer.writeNumberValue("versionNumber", workflowVersion.versionNumber);
}
