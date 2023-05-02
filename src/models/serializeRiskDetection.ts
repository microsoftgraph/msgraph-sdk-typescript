import {ActivityType} from './activityType';
import {RiskDetail} from './riskDetail';
import {RiskDetection} from './riskDetection';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeEntity} from './serializeEntity';
import {serializeSignInLocation} from './serializeSignInLocation';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskDetection(writer: SerializationWriter, riskDetection: RiskDetection | undefined = {} as RiskDetection) : void {
        serializeEntity(writer, riskDetection)
        writer.writeEnumValue<ActivityType>("activity", riskDetection.activity);
        writer.writeDateValue("activityDateTime", riskDetection.activityDateTime);
        writer.writeStringValue("additionalInfo", riskDetection.additionalInfo);
        writer.writeStringValue("correlationId", riskDetection.correlationId);
        writer.writeDateValue("detectedDateTime", riskDetection.detectedDateTime);
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", riskDetection.detectionTimingType);
        writer.writeStringValue("ipAddress", riskDetection.ipAddress);
        writer.writeDateValue("lastUpdatedDateTime", riskDetection.lastUpdatedDateTime);
        writer.writeObjectValue<SignInLocation>("location", riskDetection.location, serializeSignInLocation);
        writer.writeStringValue("requestId", riskDetection.requestId);
        writer.writeEnumValue<RiskDetail>("riskDetail", riskDetection.riskDetail);
        writer.writeStringValue("riskEventType", riskDetection.riskEventType);
        writer.writeEnumValue<RiskLevel>("riskLevel", riskDetection.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", riskDetection.riskState);
        writer.writeStringValue("source", riskDetection.source);
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", riskDetection.tokenIssuerType);
        writer.writeStringValue("userDisplayName", riskDetection.userDisplayName);
        writer.writeStringValue("userId", riskDetection.userId);
        writer.writeStringValue("userPrincipalName", riskDetection.userPrincipalName);
}
