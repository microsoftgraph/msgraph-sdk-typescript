import {ApprovalStage} from './approvalStage';
import {Entity} from './entity';

export interface Approval extends Entity{
    /** Used for the approvalStages property of approval settings in the requestApprovalSettings property of an access package assignment policy. Specifies the primary, fallback, and escalation approvers of each stage. */
    stages?:ApprovalStage[] | undefined;
}
