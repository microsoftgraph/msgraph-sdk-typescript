import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHealthIssue extends Parsable, ServiceAnnouncementBase {
    /**
     * The classification property
     */
    classification?: ServiceHealthClassificationType | undefined;
    /**
     * The feature name of the service issue.
     */
    feature?: string | undefined;
    /**
     * The feature group name of the service issue.
     */
    featureGroup?: string | undefined;
    /**
     * The description of the service issue impact.
     */
    impactDescription?: string | undefined;
    /**
     * Indicates whether the issue is resolved.
     */
    isResolved?: boolean | undefined;
    /**
     * The origin property
     */
    origin?: ServiceHealthOrigin | undefined;
    /**
     * Collection of historical posts for the service issue.
     */
    posts?: ServiceHealthIssuePost[] | undefined;
    /**
     * Indicates the service affected by the issue.
     */
    service?: string | undefined;
    /**
     * The status property
     */
    status?: ServiceHealthStatus | undefined;
}
