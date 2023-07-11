import {Entity} from './entity';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealth extends Entity, Parsable {
    /**
     * A collection of issues that happened on the service, with detailed information for each issue.
     */
    issues?: ServiceHealthIssue[] | undefined;
    /**
     * The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant.
     */
    service?: string | undefined;
    /**
     * The status property
     */
    status?: ServiceHealthStatus | undefined;
}
