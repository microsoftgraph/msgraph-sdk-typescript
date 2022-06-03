import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingEvent extends Entity, Partial<Parsable> {
    /** Id used for tracing the failure in the service. */
    correlationId?: string | undefined;
    /** Time when the event occurred . */
    eventDateTime?: Date | undefined;
}
