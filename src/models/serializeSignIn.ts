import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {DeviceDetail} from './deviceDetail';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeAppliedConditionalAccessPolicy} from './serializeAppliedConditionalAccessPolicy';
import {serializeDeviceDetail} from './serializeDeviceDetail';
import {serializeEntity} from './serializeEntity';
import {serializeSignInLocation} from './serializeSignInLocation';
import {serializeSignInStatus} from './serializeSignInStatus';
import {SignIn} from './signIn';
import {SignInLocation} from './signInLocation';
import {SignInStatus} from './signInStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSignIn(writer: SerializationWriter, signIn: SignIn | undefined = {} as SignIn) : void {
        serializeEntity(writer, signIn)
        writer.writeStringValue("appDisplayName", signIn.appDisplayName);
        writer.writeStringValue("appId", signIn.appId);
        writer.writeCollectionOfObjectValues<AppliedConditionalAccessPolicy>("appliedConditionalAccessPolicies", signIn.appliedConditionalAccessPolicies, serializeAppliedConditionalAccessPolicy);
        writer.writeStringValue("clientAppUsed", signIn.clientAppUsed);
        writer.writeEnumValue<ConditionalAccessStatus>("conditionalAccessStatus", signIn.conditionalAccessStatus);
        writer.writeStringValue("correlationId", signIn.correlationId);
        writer.writeDateValue("createdDateTime", signIn.createdDateTime);
        writer.writeObjectValue<DeviceDetail>("deviceDetail", signIn.deviceDetail, serializeDeviceDetail);
        writer.writeStringValue("ipAddress", signIn.ipAddress);
        writer.writeBooleanValue("isInteractive", signIn.isInteractive);
        writer.writeObjectValue<SignInLocation>("location", signIn.location, serializeSignInLocation);
        writer.writeStringValue("resourceDisplayName", signIn.resourceDisplayName);
        writer.writeStringValue("resourceId", signIn.resourceId);
        writer.writeEnumValue<RiskDetail>("riskDetail", signIn.riskDetail);
        if(signIn.riskEventTypes)
        writer.writeEnumValue<RiskEventType>("riskEventTypes", ...signIn.riskEventTypes);
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", signIn.riskEventTypes_v2);
        writer.writeEnumValue<RiskLevel>("riskLevelAggregated", signIn.riskLevelAggregated);
        writer.writeEnumValue<RiskLevel>("riskLevelDuringSignIn", signIn.riskLevelDuringSignIn);
        writer.writeEnumValue<RiskState>("riskState", signIn.riskState);
        writer.writeObjectValue<SignInStatus>("status", signIn.status, serializeSignInStatus);
        writer.writeStringValue("userDisplayName", signIn.userDisplayName);
        writer.writeStringValue("userId", signIn.userId);
        writer.writeStringValue("userPrincipalName", signIn.userPrincipalName);
}
