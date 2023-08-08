import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {serializeWorkflow} from './serializeWorkflow';
import type {Workflow} from './workflow';
import type {WorkflowCollectionResponse} from './workflowCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkflowCollectionResponse(workflowCollectionResponse: WorkflowCollectionResponse | undefined = {} as WorkflowCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(workflowCollectionResponse),
        "value": n => { workflowCollectionResponse.value = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
