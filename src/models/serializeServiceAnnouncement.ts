import {serializeEntity} from './serializeEntity';
import {serializeServiceHealth} from './serializeServiceHealth';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import type {ServiceAnnouncement} from './serviceAnnouncement';
import type {ServiceHealth} from './serviceHealth';
import type {ServiceHealthIssue} from './serviceHealthIssue';
import type {ServiceUpdateMessage} from './serviceUpdateMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceAnnouncement(writer: SerializationWriter, serviceAnnouncement: ServiceAnnouncement | undefined = {} as ServiceAnnouncement) : void {
        serializeEntity(writer, serviceAnnouncement)
        writer.writeCollectionOfObjectValues<ServiceHealth>("healthOverviews", serviceAnnouncement.healthOverviews, serializeServiceHealth);
        writer.writeCollectionOfObjectValues<ServiceHealthIssue>("issues", serviceAnnouncement.issues, serializeServiceHealthIssue);
        writer.writeCollectionOfObjectValues<ServiceUpdateMessage>("messages", serviceAnnouncement.messages, serializeServiceUpdateMessage);
}
