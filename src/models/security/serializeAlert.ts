import {serializeEntity} from '../serializeEntity';
import {Alert} from './alert';
import {AlertClassification} from './alertClassification';
import {AlertComment} from './alertComment';
import {AlertDetermination} from './alertDetermination';
import {AlertEvidence} from './alertEvidence';
import {AlertSeverity} from './alertSeverity';
import {AlertStatus} from './alertStatus';
import {DetectionSource} from './detectionSource';
import {serializeAlertComment} from './serializeAlertComment';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {ServiceSource} from './serviceSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlert(writer: SerializationWriter, alert: Alert | undefined = {} as Alert) : void {
        serializeEntity(writer, alert)
        writer.writeStringValue("actorDisplayName", alert.actorDisplayName);
        writer.writeStringValue("alertWebUrl", alert.alertWebUrl);
        writer.writeStringValue("assignedTo", alert.assignedTo);
        writer.writeStringValue("category", alert.category);
        writer.writeEnumValue<AlertClassification>("classification", alert.classification);
        writer.writeCollectionOfObjectValues<AlertComment>("comments", alert.comments, serializeAlertComment);
        writer.writeDateValue("createdDateTime", alert.createdDateTime);
        writer.writeStringValue("description", alert.description);
        writer.writeEnumValue<DetectionSource>("detectionSource", alert.detectionSource);
        writer.writeStringValue("detectorId", alert.detectorId);
        writer.writeEnumValue<AlertDetermination>("determination", alert.determination);
        writer.writeCollectionOfObjectValues<AlertEvidence>("evidence", alert.evidence, serializeAlertEvidence);
        writer.writeDateValue("firstActivityDateTime", alert.firstActivityDateTime);
        writer.writeStringValue("incidentId", alert.incidentId);
        writer.writeStringValue("incidentWebUrl", alert.incidentWebUrl);
        writer.writeDateValue("lastActivityDateTime", alert.lastActivityDateTime);
        writer.writeDateValue("lastUpdateDateTime", alert.lastUpdateDateTime);
        writer.writeCollectionOfPrimitiveValues<string>("mitreTechniques", alert.mitreTechniques);
        writer.writeStringValue("providerAlertId", alert.providerAlertId);
        writer.writeStringValue("recommendedActions", alert.recommendedActions);
        writer.writeDateValue("resolvedDateTime", alert.resolvedDateTime);
        writer.writeEnumValue<ServiceSource>("serviceSource", alert.serviceSource);
        writer.writeEnumValue<AlertSeverity>("severity", alert.severity);
        writer.writeEnumValue<AlertStatus>("status", alert.status);
        writer.writeStringValue("tenantId", alert.tenantId);
        writer.writeStringValue("threatDisplayName", alert.threatDisplayName);
        writer.writeStringValue("threatFamilyName", alert.threatFamilyName);
        writer.writeStringValue("title", alert.title);
}
