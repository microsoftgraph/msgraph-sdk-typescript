import {ChangeTrackedEntity} from './changeTrackedEntity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SchedulingGroup extends Partial<AdditionalDataHolder>, ChangeTrackedEntity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The display name for the schedulingGroup. Required. */
    displayName?: string | undefined;
    /** Indicates whether the schedulingGroup can be used when creating new entities or updating existing ones. Required. */
    isActive?: boolean | undefined;
    /** The list of user IDs that are a member of the schedulingGroup. Required. */
    userIds?: string[] | undefined;
}
