import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';

export interface ServiceHealthIssue extends ServiceAnnouncementBase{
    /** The type of service health issue. Possible values are: advisory, incident, unknownFutureValue. */
    classification?:ServiceHealthClassificationType | undefined;
    /** The feature name of the service issue. */
    feature?:string | undefined;
    /** The feature group name of the service issue. */
    featureGroup?:string | undefined;
    /** The description of the service issue impact. */
    impactDescription?:string | undefined;
    /** Indicates whether the issue is resolved. */
    isResolved?:boolean | undefined;
    /** Indicates the origin of the service issue. Possible values are: microsoft, thirdParty, customer, unknownFutureValue. */
    origin?:ServiceHealthOrigin | undefined;
    /** Collection of historical posts for the service issue. */
    posts?:ServiceHealthIssuePost[] | undefined;
    /** Indicates the service affected by the issue. */
    service?:string | undefined;
    /** The status of the service issue. Possible values are: serviceOperational, investigating, restoringService, verifyingService, serviceRestored, postIncidentReviewPublished, serviceDegradation, serviceInterruption, extendedRecovery, falsePositive, investigationSuspended, resolved, mitigatedExternal, mitigated, resolvedExternal, confirmed, reported, unknownFutureValue. For more details, see serviceHealthStatus values. */
    status?:ServiceHealthStatus | undefined;
}
