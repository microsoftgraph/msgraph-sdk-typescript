import { type DeletedItemContainer } from './deletedItemContainer';
import { serializeWorkflow } from './identityGovernance/serializeWorkflow';
import { type Workflow } from './identityGovernance/workflow';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDeletedItemContainer(writer: SerializationWriter, deletedItemContainer: DeletedItemContainer | undefined = {} as DeletedItemContainer) : void {
        serializeEntity(writer, deletedItemContainer)
        writer.writeCollectionOfObjectValues<Workflow>("workflows", deletedItemContainer.workflows, serializeWorkflow);
}
