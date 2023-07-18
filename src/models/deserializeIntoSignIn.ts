import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {createAppliedConditionalAccessPolicyFromDiscriminatorValue} from './createAppliedConditionalAccessPolicyFromDiscriminatorValue';
import {createDeviceDetailFromDiscriminatorValue} from './createDeviceDetailFromDiscriminatorValue';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {createSignInStatusFromDiscriminatorValue} from './createSignInStatusFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceDetail} from './deviceDetail';
import {RiskDetail} from './riskDetail';
import {RiskEventType} from './riskEventType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {serializeAppliedConditionalAccessPolicy} from './serializeAppliedConditionalAccessPolicy';
import {serializeDeviceDetail} from './serializeDeviceDetail';
import {serializeSignInLocation} from './serializeSignInLocation';
import {serializeSignInStatus} from './serializeSignInStatus';
import {SignIn} from './signIn';
import {SignInLocation} from './signInLocation';
import {SignInStatus} from './signInStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSignIn(signIn: SignIn | undefined = {} as SignIn) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(signIn),
        "appDisplayName": n => { signIn.appDisplayName = n.getStringValue(); },
        "appId": n => { signIn.appId = n.getStringValue(); },
        "appliedConditionalAccessPolicies": n => { signIn.appliedConditionalAccessPolicies = n.getCollectionOfObjectValues<AppliedConditionalAccessPolicy>(createAppliedConditionalAccessPolicyFromDiscriminatorValue); },
        "clientAppUsed": n => { signIn.clientAppUsed = n.getStringValue(); },
        "conditionalAccessStatus": n => { signIn.conditionalAccessStatus = n.getEnumValue<ConditionalAccessStatus>(ConditionalAccessStatus); },
        "correlationId": n => { signIn.correlationId = n.getStringValue(); },
        "createdDateTime": n => { signIn.createdDateTime = n.getDateValue(); },
        "deviceDetail": n => { signIn.deviceDetail = n.getObjectValue<DeviceDetail>(createDeviceDetailFromDiscriminatorValue); },
        "ipAddress": n => { signIn.ipAddress = n.getStringValue(); },
        "isInteractive": n => { signIn.isInteractive = n.getBooleanValue(); },
        "location": n => { signIn.location = n.getObjectValue<SignInLocation>(createSignInLocationFromDiscriminatorValue); },
        "resourceDisplayName": n => { signIn.resourceDisplayName = n.getStringValue(); },
        "resourceId": n => { signIn.resourceId = n.getStringValue(); },
        "riskDetail": n => { signIn.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
        "riskEventTypes": n => { signIn.riskEventTypes = n.getCollectionOfEnumValues<RiskEventType>(RiskEventType); },
        "riskEventTypes_v2": n => { signIn.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>(); },
        "riskLevelAggregated": n => { signIn.riskLevelAggregated = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskLevelDuringSignIn": n => { signIn.riskLevelDuringSignIn = n.getEnumValue<RiskLevel>(RiskLevel); },
        "riskState": n => { signIn.riskState = n.getEnumValue<RiskState>(RiskState); },
        "status": n => { signIn.status = n.getObjectValue<SignInStatus>(createSignInStatusFromDiscriminatorValue); },
        "userDisplayName": n => { signIn.userDisplayName = n.getStringValue(); },
        "userId": n => { signIn.userId = n.getStringValue(); },
        "userPrincipalName": n => { signIn.userPrincipalName = n.getStringValue(); },
    }
}
