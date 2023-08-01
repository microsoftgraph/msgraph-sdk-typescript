import type {Entity} from './entity';
import type {ServiceHealth} from './serviceHealth';
import type {ServiceHealthIssue} from './serviceHealthIssue';
import type {ServiceUpdateMessage} from './serviceUpdateMessage';
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
