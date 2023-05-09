import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {Alert} from './alert';
import {AlertClassification} from './alertClassification';
import {AlertComment} from './alertComment';
import {AlertDetermination} from './alertDetermination';
import {AlertSeverity} from './alertSeverity';
import {createAlertCommentFromDiscriminatorValue} from './createAlertCommentFromDiscriminatorValue';
import {createAlertFromDiscriminatorValue} from './createAlertFromDiscriminatorValue';
import {Incident} from './incident';
import {IncidentStatus} from './incidentStatus';
import {serializeAlert} from './serializeAlert';
import {serializeAlertComment} from './serializeAlertComment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncident(incident: Incident | undefined = {} as Incident) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(incident),
        "alerts": n => { incident.alerts = n.getCollectionOfObjectValues<Alert>(createAlertFromDiscriminatorValue); },
        "assignedTo": n => { incident.assignedTo = n.getStringValue(); },
        "classification": n => { incident.classification = n.getEnumValue<AlertClassification>(AlertClassification); },
        "comments": n => { incident.comments = n.getCollectionOfObjectValues<AlertComment>(createAlertCommentFromDiscriminatorValue); },
        "createdDateTime": n => { incident.createdDateTime = n.getDateValue(); },
        "customTags": n => { incident.customTags = n.getCollectionOfPrimitiveValues<string>(); },
        "determination": n => { incident.determination = n.getEnumValue<AlertDetermination>(AlertDetermination); },
        "displayName": n => { incident.displayName = n.getStringValue(); },
        "incidentWebUrl": n => { incident.incidentWebUrl = n.getStringValue(); },
        "lastUpdateDateTime": n => { incident.lastUpdateDateTime = n.getDateValue(); },
        "redirectIncidentId": n => { incident.redirectIncidentId = n.getStringValue(); },
        "severity": n => { incident.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
        "status": n => { incident.status = n.getEnumValue<IncidentStatus>(IncidentStatus); },
        "tenantId": n => { incident.tenantId = n.getStringValue(); },
    }
}
