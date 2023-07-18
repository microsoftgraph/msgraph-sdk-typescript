import {AuditActor} from './auditActor';
import {AuditResource} from './auditResource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export interface AuditEvent extends Entity, Parsable {
    /**
     * Friendly name of the activity.
     */
    activity?: string | undefined;
    /**
     * The date time in UTC when the activity was performed.
     */
    activityDateTime?: Date | undefined;
    /**
     * The HTTP operation type of the activity.
     */
    activityOperationType?: string | undefined;
    /**
     * The result of the activity.
     */
    activityResult?: string | undefined;
    /**
     * The type of activity that was being performed.
     */
    activityType?: string | undefined;
    /**
     * AAD user and application that are associated with the audit event.
     */
    actor?: AuditActor | undefined;
    /**
     * Audit category.
     */
    category?: string | undefined;
    /**
     * Component name.
     */
    componentName?: string | undefined;
    /**
     * The client request Id that is used to correlate activity within the system.
     */
    correlationId?: Guid | undefined;
    /**
     * Event display name.
     */
    displayName?: string | undefined;
    /**
     * Resources being modified.
     */
    resources?: AuditResource[] | undefined;
}
