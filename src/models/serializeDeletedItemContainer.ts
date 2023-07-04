import {DeletedItemContainer} from './deletedItemContainer';
import {serializeWorkflow} from './identityGovernance/serializeWorkflow';
import {Workflow} from './identityGovernance/workflow';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeletedItemContainer(writer: SerializationWriter, deletedItemContainer: DeletedItemContainer | undefined = {} as DeletedItemContainer) : void {
        serializeEntity(writer, deletedItemContainer)
        writer.writeCollectionOfObjectValues<Workflow>("workflows", deletedItemContainer.workflows, serializeWorkflow);
}
