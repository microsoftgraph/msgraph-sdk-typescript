import {Entity} from '../entity';
import {User} from '../user';
import {LifecycleWorkflowProcessingStatus} from './lifecycleWorkflowProcessingStatus';
import {Task} from './task';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskProcessingResult extends Entity, Parsable {
    /**
     * The date time when taskProcessingResult execution ended. Value is null if task execution is still in progress.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    completedDateTime?: Date | undefined;
    /**
     * The date time when the taskProcessingResult was created.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    createdDateTime?: Date | undefined;
    /**
     * Describes why the taskProcessingResult has failed.
     */
    failureReason?: string | undefined;
    /**
     * The processingStatus property
     */
    processingStatus?: LifecycleWorkflowProcessingStatus | undefined;
    /**
     * The date time when taskProcessingResult execution started. Value is null if task execution has not yet started.Supports $filter(lt, le, gt, ge, eq, ne) and $orderby.
     */
    startedDateTime?: Date | undefined;
    /**
     * The subject property
     */
    subject?: User | undefined;
    /**
     * The task property
     */
    task?: Task | undefined;
}
