import {Entity} from '../entity';
import {IdentitySet} from '../identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RetentionEventType extends Entity, Parsable {
    /**
     * The user who created the retentionEventType.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * The date time when the retentionEventType was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Optional information about the event type.
     */
    description?: string | undefined;
    /**
     * Name of the event type.
     */
    displayName?: string | undefined;
    /**
     * The user who last modified the retentionEventType.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The latest date time when the retentionEventType was modified.
     */
    lastModifiedDateTime?: Date | undefined;
}
