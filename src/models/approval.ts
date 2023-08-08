import type {ApprovalStage} from './approvalStage';
import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Approval extends Entity, Parsable {
    /**
     * A collection of stages in the approval decision.
     */
    stages?: ApprovalStage[] | undefined;
}
