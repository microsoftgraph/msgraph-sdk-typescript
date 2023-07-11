import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeWorkflowTemplate} from './serializeWorkflowTemplate';
import {WorkflowTemplate} from './workflowTemplate';
import {WorkflowTemplateCollectionResponse} from './workflowTemplateCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowTemplateCollectionResponse(writer: SerializationWriter, workflowTemplateCollectionResponse: WorkflowTemplateCollectionResponse | undefined = {} as WorkflowTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workflowTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkflowTemplate>("value", workflowTemplateCollectionResponse.value, serializeWorkflowTemplate);
}
