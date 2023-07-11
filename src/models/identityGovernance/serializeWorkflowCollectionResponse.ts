import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {serializeWorkflow} from './serializeWorkflow';
import {Workflow} from './workflow';
import {WorkflowCollectionResponse} from './workflowCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkflowCollectionResponse(writer: SerializationWriter, workflowCollectionResponse: WorkflowCollectionResponse | undefined = {} as WorkflowCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, workflowCollectionResponse)
        writer.writeCollectionOfObjectValues<Workflow>("value", workflowCollectionResponse.value, serializeWorkflow);
}
