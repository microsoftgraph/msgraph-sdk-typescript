import {Entity} from './entity';
import {Workflow} from './identityGovernance/workflow';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeletedItemContainer extends Entity, Parsable {
    /**
     * Deleted workflows that end up in the deletedItemsContainer.
     */
    workflows?: Workflow[] | undefined;
}
