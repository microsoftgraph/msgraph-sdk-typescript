import { serializeWorkflowBase } from './serializeWorkflowBase';
import { type WorkflowVersion } from './workflowVersion';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkflowVersion(writer: SerializationWriter, workflowVersion: WorkflowVersion | undefined = {} as WorkflowVersion) : void {
        serializeWorkflowBase(writer, workflowVersion)
        writer.writeNumberValue("versionNumber", workflowVersion.versionNumber);
}
