import {createServiceHealthIssuePostFromDiscriminatorValue} from './createServiceHealthIssuePostFromDiscriminatorValue';
import {deserializeIntoServiceAnnouncementBase} from './deserializeIntoServiceAnnouncementBase';
import {serializeServiceHealthIssuePost} from './serializeServiceHealthIssuePost';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthIssue(serviceHealthIssue: ServiceHealthIssue | undefined = {} as ServiceHealthIssue) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoServiceAnnouncementBase(serviceHealthIssue),
        "classification": n => { serviceHealthIssue.classification = n.getEnumValue<ServiceHealthClassificationType>(ServiceHealthClassificationType); },
        "feature": n => { serviceHealthIssue.feature = n.getStringValue(); },
        "featureGroup": n => { serviceHealthIssue.featureGroup = n.getStringValue(); },
        "impactDescription": n => { serviceHealthIssue.impactDescription = n.getStringValue(); },
        "isResolved": n => { serviceHealthIssue.isResolved = n.getBooleanValue(); },
        "origin": n => { serviceHealthIssue.origin = n.getEnumValue<ServiceHealthOrigin>(ServiceHealthOrigin); },
        "posts": n => { serviceHealthIssue.posts = n.getCollectionOfObjectValues<ServiceHealthIssuePost>(createServiceHealthIssuePostFromDiscriminatorValue); },
        "service": n => { serviceHealthIssue.service = n.getStringValue(); },
        "status": n => { serviceHealthIssue.status = n.getEnumValue<ServiceHealthStatus>(ServiceHealthStatus); },
    }
}
