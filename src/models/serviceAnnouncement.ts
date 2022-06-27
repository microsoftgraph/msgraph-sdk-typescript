import {Entity} from './entity';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncement extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly. */
    healthOverviews?: ServiceHealth[] | undefined;
    /** A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly. */
    issues?: ServiceHealthIssue[] | undefined;
    /** A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly. */
    messages?: ServiceUpdateMessage[] | undefined;
}
