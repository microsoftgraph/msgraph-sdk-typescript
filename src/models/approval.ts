import {ApprovalStage} from './approvalStage';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Approval extends Entity, Parsable {
    /**
     * A collection of stages in the approval decision.
     */
    stages?: ApprovalStage[] | undefined;
}
