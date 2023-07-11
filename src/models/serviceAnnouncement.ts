import {Entity} from './entity';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncement extends Entity, Parsable {
    /**
     * A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     */
    healthOverviews?: ServiceHealth[] | undefined;
    /**
     * A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     */
    issues?: ServiceHealthIssue[] | undefined;
    /**
     * A collection of service messages for tenant. This property is a contained navigation property, it is nullable and readonly.
     */
    messages?: ServiceUpdateMessage[] | undefined;
}
