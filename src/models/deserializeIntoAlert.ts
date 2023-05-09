import {Alert} from './alert';
import {AlertDetection} from './alertDetection';
import {AlertFeedback} from './alertFeedback';
import {AlertHistoryState} from './alertHistoryState';
import {AlertSeverity} from './alertSeverity';
import {AlertStatus} from './alertStatus';
import {AlertTrigger} from './alertTrigger';
import {CloudAppSecurityState} from './cloudAppSecurityState';
import {createAlertDetectionFromDiscriminatorValue} from './createAlertDetectionFromDiscriminatorValue';
import {createAlertHistoryStateFromDiscriminatorValue} from './createAlertHistoryStateFromDiscriminatorValue';
import {createAlertTriggerFromDiscriminatorValue} from './createAlertTriggerFromDiscriminatorValue';
import {createCloudAppSecurityStateFromDiscriminatorValue} from './createCloudAppSecurityStateFromDiscriminatorValue';
import {createFileSecurityStateFromDiscriminatorValue} from './createFileSecurityStateFromDiscriminatorValue';
import {createHostSecurityStateFromDiscriminatorValue} from './createHostSecurityStateFromDiscriminatorValue';
import {createInvestigationSecurityStateFromDiscriminatorValue} from './createInvestigationSecurityStateFromDiscriminatorValue';
import {createMalwareStateFromDiscriminatorValue} from './createMalwareStateFromDiscriminatorValue';
import {createMessageSecurityStateFromDiscriminatorValue} from './createMessageSecurityStateFromDiscriminatorValue';
import {createNetworkConnectionFromDiscriminatorValue} from './createNetworkConnectionFromDiscriminatorValue';
import {createProcessFromDiscriminatorValue} from './createProcessFromDiscriminatorValue';
import {createRegistryKeyStateFromDiscriminatorValue} from './createRegistryKeyStateFromDiscriminatorValue';
import {createSecurityResourceFromDiscriminatorValue} from './createSecurityResourceFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {createUriClickSecurityStateFromDiscriminatorValue} from './createUriClickSecurityStateFromDiscriminatorValue';
import {createUserSecurityStateFromDiscriminatorValue} from './createUserSecurityStateFromDiscriminatorValue';
import {createVulnerabilityStateFromDiscriminatorValue} from './createVulnerabilityStateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FileSecurityState} from './fileSecurityState';
import {HostSecurityState} from './hostSecurityState';
import {InvestigationSecurityState} from './investigationSecurityState';
import {MalwareState} from './malwareState';
import {MessageSecurityState} from './messageSecurityState';
import {NetworkConnection} from './networkConnection';
import {Process} from './process';
import {RegistryKeyState} from './registryKeyState';
import {SecurityResource} from './securityResource';
import {SecurityVendorInformation} from './securityVendorInformation';
import {serializeAlertDetection} from './serializeAlertDetection';
import {serializeAlertHistoryState} from './serializeAlertHistoryState';
import {serializeAlertTrigger} from './serializeAlertTrigger';
import {serializeCloudAppSecurityState} from './serializeCloudAppSecurityState';
import {serializeFileSecurityState} from './serializeFileSecurityState';
import {serializeHostSecurityState} from './serializeHostSecurityState';
import {serializeInvestigationSecurityState} from './serializeInvestigationSecurityState';
import {serializeMalwareState} from './serializeMalwareState';
import {serializeMessageSecurityState} from './serializeMessageSecurityState';
import {serializeNetworkConnection} from './serializeNetworkConnection';
import {serializeProcess} from './serializeProcess';
import {serializeRegistryKeyState} from './serializeRegistryKeyState';
import {serializeSecurityResource} from './serializeSecurityResource';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {serializeUriClickSecurityState} from './serializeUriClickSecurityState';
import {serializeUserSecurityState} from './serializeUserSecurityState';
import {serializeVulnerabilityState} from './serializeVulnerabilityState';
import {UriClickSecurityState} from './uriClickSecurityState';
import {UserSecurityState} from './userSecurityState';
import {VulnerabilityState} from './vulnerabilityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlert(alert: Alert | undefined = {} as Alert) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(alert),
        "activityGroupName": n => { alert.activityGroupName = n.getStringValue(); },
        "alertDetections": n => { alert.alertDetections = n.getCollectionOfObjectValues<AlertDetection>(createAlertDetectionFromDiscriminatorValue); },
        "assignedTo": n => { alert.assignedTo = n.getStringValue(); },
        "azureSubscriptionId": n => { alert.azureSubscriptionId = n.getStringValue(); },
        "azureTenantId": n => { alert.azureTenantId = n.getStringValue(); },
        "category": n => { alert.category = n.getStringValue(); },
        "closedDateTime": n => { alert.closedDateTime = n.getDateValue(); },
        "cloudAppStates": n => { alert.cloudAppStates = n.getCollectionOfObjectValues<CloudAppSecurityState>(createCloudAppSecurityStateFromDiscriminatorValue); },
        "comments": n => { alert.comments = n.getCollectionOfPrimitiveValues<string>(); },
        "confidence": n => { alert.confidence = n.getNumberValue(); },
        "createdDateTime": n => { alert.createdDateTime = n.getDateValue(); },
        "description": n => { alert.description = n.getStringValue(); },
        "detectionIds": n => { alert.detectionIds = n.getCollectionOfPrimitiveValues<string>(); },
        "eventDateTime": n => { alert.eventDateTime = n.getDateValue(); },
        "feedback": n => { alert.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback); },
        "fileStates": n => { alert.fileStates = n.getCollectionOfObjectValues<FileSecurityState>(createFileSecurityStateFromDiscriminatorValue); },
        "historyStates": n => { alert.historyStates = n.getCollectionOfObjectValues<AlertHistoryState>(createAlertHistoryStateFromDiscriminatorValue); },
        "hostStates": n => { alert.hostStates = n.getCollectionOfObjectValues<HostSecurityState>(createHostSecurityStateFromDiscriminatorValue); },
        "incidentIds": n => { alert.incidentIds = n.getCollectionOfPrimitiveValues<string>(); },
        "investigationSecurityStates": n => { alert.investigationSecurityStates = n.getCollectionOfObjectValues<InvestigationSecurityState>(createInvestigationSecurityStateFromDiscriminatorValue); },
        "lastEventDateTime": n => { alert.lastEventDateTime = n.getDateValue(); },
        "lastModifiedDateTime": n => { alert.lastModifiedDateTime = n.getDateValue(); },
        "malwareStates": n => { alert.malwareStates = n.getCollectionOfObjectValues<MalwareState>(createMalwareStateFromDiscriminatorValue); },
        "messageSecurityStates": n => { alert.messageSecurityStates = n.getCollectionOfObjectValues<MessageSecurityState>(createMessageSecurityStateFromDiscriminatorValue); },
        "networkConnections": n => { alert.networkConnections = n.getCollectionOfObjectValues<NetworkConnection>(createNetworkConnectionFromDiscriminatorValue); },
        "processes": n => { alert.processes = n.getCollectionOfObjectValues<Process>(createProcessFromDiscriminatorValue); },
        "recommendedActions": n => { alert.recommendedActions = n.getCollectionOfPrimitiveValues<string>(); },
        "registryKeyStates": n => { alert.registryKeyStates = n.getCollectionOfObjectValues<RegistryKeyState>(createRegistryKeyStateFromDiscriminatorValue); },
        "securityResources": n => { alert.securityResources = n.getCollectionOfObjectValues<SecurityResource>(createSecurityResourceFromDiscriminatorValue); },
        "severity": n => { alert.severity = n.getEnumValue<AlertSeverity>(AlertSeverity); },
        "sourceMaterials": n => { alert.sourceMaterials = n.getCollectionOfPrimitiveValues<string>(); },
        "status": n => { alert.status = n.getEnumValue<AlertStatus>(AlertStatus); },
        "tags": n => { alert.tags = n.getCollectionOfPrimitiveValues<string>(); },
        "title": n => { alert.title = n.getStringValue(); },
        "triggers": n => { alert.triggers = n.getCollectionOfObjectValues<AlertTrigger>(createAlertTriggerFromDiscriminatorValue); },
        "uriClickSecurityStates": n => { alert.uriClickSecurityStates = n.getCollectionOfObjectValues<UriClickSecurityState>(createUriClickSecurityStateFromDiscriminatorValue); },
        "userStates": n => { alert.userStates = n.getCollectionOfObjectValues<UserSecurityState>(createUserSecurityStateFromDiscriminatorValue); },
        "vendorInformation": n => { alert.vendorInformation = n.getObjectValue<SecurityVendorInformation>(createSecurityVendorInformationFromDiscriminatorValue); },
        "vulnerabilityStates": n => { alert.vulnerabilityStates = n.getCollectionOfObjectValues<VulnerabilityState>(createVulnerabilityStateFromDiscriminatorValue); },
    }
}
