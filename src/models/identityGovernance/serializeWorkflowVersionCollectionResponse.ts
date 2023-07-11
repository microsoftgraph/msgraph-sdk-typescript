import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeWorkflowVersion} from './serializeWorkflowVersion';
import {WorkflowVersion} from './workflowVersion';
import {WorkflowVersionCollectionResponse} from './workflowVersionCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowVersionCollectionResponse(writer: SerializationWriter, workflowVersionCollectionResponse: WorkflowVersionCollectionResponse | undefined = {} as WorkflowVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workflowVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkflowVersion>("value", workflowVersionCollectionResponse.value, serializeWorkflowVersion);
}
