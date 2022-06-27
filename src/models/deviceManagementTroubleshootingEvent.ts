import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagementTroubleshootingEvent extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Id used for tracing the failure in the service. */
    correlationId?: string | undefined;
    /** Time when the event occurred . */
    eventDateTime?: Date | undefined;
}
