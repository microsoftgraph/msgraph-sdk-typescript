import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeWorkflowVersion} from './serializeWorkflowVersion';
import type {WorkflowVersion} from './workflowVersion';
import type {WorkflowVersionCollectionResponse} from './workflowVersionCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowVersionCollectionResponse(writer: SerializationWriter, workflowVersionCollectionResponse: WorkflowVersionCollectionResponse | undefined = {} as WorkflowVersionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workflowVersionCollectionResponse)
        writer.writeCollectionOfObjectValues<WorkflowVersion>("value", workflowVersionCollectionResponse.value, serializeWorkflowVersion);
}
