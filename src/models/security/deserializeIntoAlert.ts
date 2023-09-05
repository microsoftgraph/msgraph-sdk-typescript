import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { type Alert } from './alert';
import { AlertClassification } from './alertClassification';
import { type AlertComment } from './alertComment';
import { AlertDetermination } from './alertDetermination';
import { type AlertEvidence } from './alertEvidence';
import { AlertSeverity } from './alertSeverity';
import { AlertStatus } from './alertStatus';
import { createAlertCommentFromDiscriminatorValue } from './createAlertCommentFromDiscriminatorValue';
import { createAlertEvidenceFromDiscriminatorValue } from './createAlertEvidenceFromDiscriminatorValue';
import { createDictionaryFromDiscriminatorValue } from './createDictionaryFromDiscriminatorValue';
import { DetectionSource } from './detectionSource';
import { type Dictionary } from './dictionary';
import { serializeAlertComment } from './serializeAlertComment';
import { serializeAlertEvidence } from './serializeAlertEvidence';
import { serializeDictionary } from './serializeDictionary';
import { ServiceSource } from './serviceSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlert(alert: Alert | undefined = {} as Alert) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(alert),
        "actorDisplayName": n => { alert.actorDisplayName = n.getStringValue(); },
        "alertPolicyId": n => { alert.alertPolicyId = n.getStringValue(); },
        "alertWebUrl": n => { alert.alertWebUrl = n.getStringValue(); },
        "assignedTo": n => { alert.assignedTo = n.getStringValue(); },
        "category": n => { alert.category = n.getStringValue(); },
        "classification": n => { alert.classification = n.getEnumValue<AlertClassification>(AlertClassification); },
        "comments": n => { alert.comments = n.getCollectionOfObjectValues<AlertComment>(createAlertCommentFromDiscriminatorValue); },
        "createdDateTime": n => { alert.createdDateTime = n.getDateValue(); },
        "description": n => { alert.description = n.getStringValue(); },
        "detectionSource": n => { alert.detectionSource = n.getEnumValue<DetectionSource>(DetectionSource); },
        "detectorId": n => { alert.detectorId = n.getStringValue(); },
        "determination": n => { alert.determination = n.getEnumValue<AlertDetermination>(AlertDetermination); },
        "evidence": n => { alert.evidence = n.getCollectionOfObjectValues<AlertEvidence>(createAlertEvidenceFromDiscriminatorValue); },
        "firstActivityDateTime": n => { alert.firstActivityDateTime = n.getDateValue(); },
        "incidentId": n => { alert.incidentId = n.getStringValue(); },
        "incidentWebUrl": n => { alert.incidentWebUrl = n.getStringValue(); },
        "lastActivityDateTime": n => { alert.lastActivityDateTime = n.getDateValue(); },
        "lastUpdateDateTime": n => { alert.lastUpdateDateTime = n.getDateValue(); },
        "mitreTechniques": n => { alert.mitreTechniques = n.getCollectionOfPrimitiveValues<string>(); },
        "providerAlertId": n => { alert.providerAlertId = n.getStringValue(); },
        "recommendedActions": n => { alert.recommendedActions = n.getStringValue(); },
        "resolvedDateTime": n => { alert.resolvedDateTime = n.getDateValue(); },
        "serviceSource": n => { alert.serviceSource = n.getEnumValue<ServiceSource>(ServiceSource); },
        "severity": n => { alert.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
        "status": n => { alert.status = n.getEnumValue<AlertStatus>(AlertStatus); },
        "tenantId": n => { alert.tenantId = n.getStringValue(); },
        "threatDisplayName": n => { alert.threatDisplayName = n.getStringValue(); },
        "threatFamilyName": n => { alert.threatFamilyName = n.getStringValue(); },
        "title": n => { alert.title = n.getStringValue(); },
    }
}
