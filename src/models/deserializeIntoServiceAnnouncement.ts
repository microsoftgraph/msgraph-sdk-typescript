import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {createServiceHealthIssueFromDiscriminatorValue} from './createServiceHealthIssueFromDiscriminatorValue';
import {createServiceUpdateMessageFromDiscriminatorValue} from './createServiceUpdateMessageFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeServiceHealth} from './serializeServiceHealth';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthIssue} from './serviceHealthIssue';
import {ServiceUpdateMessage} from './serviceUpdateMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceAnnouncement(serviceAnnouncement: ServiceAnnouncement | undefined = {} as ServiceAnnouncement) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(serviceAnnouncement),
        "healthOverviews": n => { serviceAnnouncement.healthOverviews = n.getCollectionOfObjectValues<ServiceHealth>(createServiceHealthFromDiscriminatorValue); },
        "issues": n => { serviceAnnouncement.issues = n.getCollectionOfObjectValues<ServiceHealthIssue>(createServiceHealthIssueFromDiscriminatorValue); },
        "messages": n => { serviceAnnouncement.messages = n.getCollectionOfObjectValues<ServiceUpdateMessage>(createServiceUpdateMessageFromDiscriminatorValue); },
    }
}
