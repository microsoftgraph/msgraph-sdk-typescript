import { serializeServiceAnnouncementBase } from './serializeServiceAnnouncementBase';
import { serializeServiceHealthIssuePost } from './serializeServiceHealthIssuePost';
import { ServiceHealthClassificationType } from './serviceHealthClassificationType';
import { type ServiceHealthIssue } from './serviceHealthIssue';
import { type ServiceHealthIssuePost } from './serviceHealthIssuePost';
import { ServiceHealthOrigin } from './serviceHealthOrigin';
import { ServiceHealthStatus } from './serviceHealthStatus';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
