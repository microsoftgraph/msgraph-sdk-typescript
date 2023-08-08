import type {Entity} from './entity';
import type {Workflow} from './identityGovernance/workflow';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeletedItemContainer extends Entity, Parsable {
    /**
     * Deleted workflows that end up in the deletedItemsContainer.
     */
    workflows?: Workflow[] | undefined;
}
