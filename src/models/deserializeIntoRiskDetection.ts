import {ActivityType} from './activityType';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {RiskDetail} from './riskDetail';
import {RiskDetection} from './riskDetection';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeSignInLocation} from './serializeSignInLocation';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskDetection(riskDetection: RiskDetection | undefined = {} as RiskDetection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(riskDetection),
        "activity": n => { riskDetection.activity = n.getEnumValue<ActivityType>(ActivityType); },
        "activityDateTime": n => { riskDetection.activityDateTime = n.getDateValue(); },
        "additionalInfo": n => { riskDetection.additionalInfo = n.getStringValue(); },
        "correlationId": n => { riskDetection.correlationId = n.getStringValue(); },
        "detectedDateTime": n => { riskDetection.detectedDateTime = n.getDateValue(); },
        "detectionTimingType": n => { riskDetection.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); },
        "ipAddress": n => { riskDetection.ipAddress = n.getStringValue(); },
        "lastUpdatedDateTime": n => { riskDetection.lastUpdatedDateTime = n.getDateValue(); },
        "location": n => { riskDetection.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
        "requestId": n => { riskDetection.requestId = n.getStringValue(); },
        "riskDetail": n => { riskDetection.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "riskEventType": n => { riskDetection.riskEventType = n.getStringValue(); },
        "riskLevel": n => { riskDetection.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskState": n => { riskDetection.riskState = n.getEnumValue<RiskState>(RiskState); },
        "source": n => { riskDetection.source = n.getStringValue(); },
        "tokenIssuerType": n => { riskDetection.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); },
        "userDisplayName": n => { riskDetection.userDisplayName = n.getStringValue(); },
        "userId": n => { riskDetection.userId = n.getStringValue(); },
        "userPrincipalName": n => { riskDetection.userPrincipalName = n.getStringValue(); },
    }
}
