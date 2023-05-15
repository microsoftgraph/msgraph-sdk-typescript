import {serializeServiceAnnouncementBase} from './serializeServiceAnnouncementBase';
import {serializeServiceHealthIssuePost} from './serializeServiceHealthIssuePost';
import {ServiceHealthClassificationType} from './serviceHealthClassificationType';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceHealthIssuePost} from './serviceHealthIssuePost';
import {ServiceHealthOrigin} from './serviceHealthOrigin';
import {ServiceHealthStatus} from './serviceHealthStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssue(writer: SerializationWriter, serviceHealthIssue: ServiceHealthIssue | undefined = {} as ServiceHealthIssue) : void {
        serializeServiceAnnouncementBase(writer, serviceHealthIssue)
        writer.writeEnumValue<ServiceHealthClassificationType>("classification", serviceHealthIssue.classification);
        writer.writeStringValue("feature", serviceHealthIssue.feature);
        writer.writeStringValue("featureGroup", serviceHealthIssue.featureGroup);
        writer.writeStringValue("impactDescription", serviceHealthIssue.impactDescription);
        writer.writeBooleanValue("isResolved", serviceHealthIssue.isResolved);
        writer.writeEnumValue<ServiceHealthOrigin>("origin", serviceHealthIssue.origin);
        writer.writeCollectionOfObjectValues<ServiceHealthIssuePost>("posts", serviceHealthIssue.posts, serializeServiceHealthIssuePost);
        writer.writeStringValue("service", serviceHealthIssue.service);
        writer.writeEnumValue<ServiceHealthStatus>("status", serviceHealthIssue.status);
}
