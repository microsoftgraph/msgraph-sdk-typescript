import { serializeBaseCollectionPaginationCountResponse } from '../serializeBaseCollectionPaginationCountResponse';
import { serializeWorkflowTemplate } from './serializeWorkflowTemplate';
import { type WorkflowTemplate } from './workflowTemplate';
import { type WorkflowTemplateCollectionResponse } from './workflowTemplateCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWorkflowTemplateCollectionResponse(writer: SerializationWriter, workflowTemplateCollectionResponse: WorkflowTemplateCollectionResponse | undefined = {} as WorkflowTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workflowTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkflowTemplate>("value", workflowTemplateCollectionResponse.value, serializeWorkflowTemplate);
}
