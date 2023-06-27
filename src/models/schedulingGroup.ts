import {ChangeTrackedEntity} from './changeTrackedEntity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroup extends ChangeTrackedEntity, Parsable {
    /**
     * The display name for the schedulingGroup. Required.
     */
    displayName?: string | undefined;
    /**
     * Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required.
     */
    isActive?: boolean | undefined;
    /**
     * The list of user IDs that are a member of the schedulingGroup. Required.
     */
    userIds?: string[] | undefined;
}
