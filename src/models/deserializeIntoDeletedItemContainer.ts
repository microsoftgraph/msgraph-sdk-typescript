import { type DeletedItemContainer } from './deletedItemContainer';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { createWorkflowFromDiscriminatorValue } from './identityGovernance/createWorkflowFromDiscriminatorValue';
import { serializeWorkflow } from './identityGovernance/serializeWorkflow';
import { type Workflow } from './identityGovernance/workflow';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDeletedItemContainer(deletedItemContainer: DeletedItemContainer | undefined = {} as DeletedItemContainer) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deletedItemContainer),
        "workflows": n => { deletedItemContainer.workflows = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
    }
}
