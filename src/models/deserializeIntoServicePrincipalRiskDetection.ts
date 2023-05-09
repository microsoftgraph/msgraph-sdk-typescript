import {ActivityType} from './activityType';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeSignInLocation} from './serializeSignInLocation';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServicePrincipalRiskDetection(servicePrincipalRiskDetection: ServicePrincipalRiskDetection | undefined = {} as ServicePrincipalRiskDetection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(servicePrincipalRiskDetection),
        "activity": n => { servicePrincipalRiskDetection.activity = n.getEnumValue<ActivityType>(ActivityType); },
        "activityDateTime": n => { servicePrincipalRiskDetection.activityDateTime = n.getDateValue(); },
        "additionalInfo": n => { servicePrincipalRiskDetection.additionalInfo = n.getStringValue(); },
        "appId": n => { servicePrincipalRiskDetection.appId = n.getStringValue(); },
        "correlationId": n => { servicePrincipalRiskDetection.correlationId = n.getStringValue(); },
        "detectedDateTime": n => { servicePrincipalRiskDetection.detectedDateTime = n.getDateValue(); },
        "detectionTimingType": n => { servicePrincipalRiskDetection.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); },
        "ipAddress": n => { servicePrincipalRiskDetection.ipAddress = n.getStringValue(); },
        "keyIds": n => { servicePrincipalRiskDetection.keyIds = n.getCollectionOfPrimitiveValues<string>(); },
        "lastUpdatedDateTime": n => { servicePrincipalRiskDetection.lastUpdatedDateTime = n.getDateValue(); },
        "location": n => { servicePrincipalRiskDetection.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
        "requestId": n => { servicePrincipalRiskDetection.requestId = n.getStringValue(); },
        "riskDetail": n => { servicePrincipalRiskDetection.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "riskEventType": n => { servicePrincipalRiskDetection.riskEventType = n.getStringValue(); },
        "riskLevel": n => { servicePrincipalRiskDetection.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskState": n => { servicePrincipalRiskDetection.riskState = n.getEnumValue<RiskState>(RiskState); },
        "servicePrincipalDisplayName": n => { servicePrincipalRiskDetection.servicePrincipalDisplayName = n.getStringValue(); },
        "servicePrincipalId": n => { servicePrincipalRiskDetection.servicePrincipalId = n.getStringValue(); },
        "source": n => { servicePrincipalRiskDetection.source = n.getStringValue(); },
        "tokenIssuerType": n => { servicePrincipalRiskDetection.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); },
    }
}
