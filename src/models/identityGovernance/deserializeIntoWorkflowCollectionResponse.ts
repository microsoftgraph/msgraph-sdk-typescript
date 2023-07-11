import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {serializeWorkflow} from './serializeWorkflow';
import {Workflow} from './workflow';
import {WorkflowCollectionResponse} from './workflowCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowCollectionResponse(workflowCollectionResponse: WorkflowCollectionResponse | undefined = {} as WorkflowCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workflowCollectionResponse),
        "value": n => { workflowCollectionResponse.value = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
