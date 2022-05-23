import {Entity} from './entity';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthStatus} from './serviceHealthStatus';

export interface ServiceHealth extends Entity{
    /** A collection of issues that happened on the service, with detailed information for each issue. */
    issues?:ServiceHealthIssue[] | undefined;
    /** The service name. Use the list healthOverviews operation to get exact string names for services subscribed by the tenant. */
    service?:string | undefined;
    /** Show the overall service health status. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    status?:ServiceHealthStatus | undefined;
}
