import {serializeEntity} from '../serializeEntity';
import {Alert} from './alert';
import {AlertClassification} from './alertClassification';
import {AlertComment} from './alertComment';
import {AlertDetermination} from './alertDetermination';
import {AlertSeverity} from './alertSeverity';
import {Incident} from './incident';
import {IncidentStatus} from './incidentStatus';
import {serializeAlert} from './serializeAlert';
import {serializeAlertComment} from './serializeAlertComment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncident(writer: SerializationWriter, incident: Incident | undefined = {} as Incident) : void {
        serializeEntity(writer, incident)
        writer.writeCollectionOfObjectValues<Alert>("alerts", incident.alerts, serializeAlert);
        writer.writeStringValue("assignedTo", incident.assignedTo);
        writer.writeEnumValue<AlertClassification>("classification", incident.classification);
        writer.writeCollectionOfObjectValues<AlertComment>("comments", incident.comments, serializeAlertComment);
        writer.writeDateValue("createdDateTime", incident.createdDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("customTags", incident.customTags);
        writer.writeEnumValue<AlertDetermination>("determination", incident.determination);
        writer.writeStringValue("displayName", incident.displayName);
        writer.writeStringValue("incidentWebUrl", incident.incidentWebUrl);
        writer.writeDateValue("lastUpdateDateTime", incident.lastUpdateDateTime);
        writer.writeStringValue("redirectIncidentId", incident.redirectIncidentId);
        writer.writeEnumValue<AlertSeverity>("severity", incident.severity);
        writer.writeEnumValue<IncidentStatus>("status", incident.status);
        writer.writeStringValue("tenantId", incident.tenantId);
}
