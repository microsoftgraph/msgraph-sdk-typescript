import {ActivityType} from './activityType';
import {RiskDetail} from './riskDetail';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeEntity} from './serializeEntity';
import {serializeSignInLocation} from './serializeSignInLocation';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServicePrincipalRiskDetection(writer: SerializationWriter, servicePrincipalRiskDetection: ServicePrincipalRiskDetection | undefined = {} as ServicePrincipalRiskDetection) : void {
        serializeEntity(writer, servicePrincipalRiskDetection)
        writer.writeEnumValue<ActivityType>("activity", servicePrincipalRiskDetection.activity);
        writer.writeDateValue("activityDateTime", servicePrincipalRiskDetection.activityDateTime);
        writer.writeStringValue("additionalInfo", servicePrincipalRiskDetection.additionalInfo);
        writer.writeStringValue("appId", servicePrincipalRiskDetection.appId);
        writer.writeStringValue("correlationId", servicePrincipalRiskDetection.correlationId);
        writer.writeDateValue("detectedDateTime", servicePrincipalRiskDetection.detectedDateTime);
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", servicePrincipalRiskDetection.detectionTimingType);
        writer.writeStringValue("ipAddress", servicePrincipalRiskDetection.ipAddress);
        writer.writeCollectionOfPrimitiveValues<string>("keyIds", servicePrincipalRiskDetection.keyIds);
        writer.writeDateValue("lastUpdatedDateTime", servicePrincipalRiskDetection.lastUpdatedDateTime);
        writer.writeObjectValue<SignInLocation>("location", servicePrincipalRiskDetection.location, serializeSignInLocation);
        writer.writeStringValue("requestId", servicePrincipalRiskDetection.requestId);
        writer.writeEnumValue<RiskDetail>("riskDetail", servicePrincipalRiskDetection.riskDetail);
        writer.writeStringValue("riskEventType", servicePrincipalRiskDetection.riskEventType);
        writer.writeEnumValue<RiskLevel>("riskLevel", servicePrincipalRiskDetection.riskLevel);
        writer.writeEnumValue<RiskState>("riskState", servicePrincipalRiskDetection.riskState);
        writer.writeStringValue("servicePrincipalDisplayName", servicePrincipalRiskDetection.servicePrincipalDisplayName);
        writer.writeStringValue("servicePrincipalId", servicePrincipalRiskDetection.servicePrincipalId);
        writer.writeStringValue("source", servicePrincipalRiskDetection.source);
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", servicePrincipalRiskDetection.tokenIssuerType);
}
