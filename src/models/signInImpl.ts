import {AppliedConditionalAccessPolicy} from './appliedConditionalAccessPolicy';
import {ConditionalAccessStatus} from './conditionalAccessStatus';
import {createAppliedConditionalAccessPolicyFromDiscriminatorValue} from './createAppliedConditionalAccessPolicyFromDiscriminatorValue';
import {createDeviceDetailFromDiscriminatorValue} from './createDeviceDetailFromDiscriminatorValue';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {createSignInStatusFromDiscriminatorValue} from './createSignInStatusFromDiscriminatorValue';
import {DeviceDetail} from './deviceDetail';
import {AppliedConditionalAccessPolicyImpl, DeviceDetailImpl, EntityImpl, SignInLocationImpl, SignInStatusImpl} from './index';
import {RiskDetail} from './riskDetail';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignIn} from './signIn';
import {SignInLocation} from './signInLocation';
import {SignInStatus} from './signInStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class SignInImpl extends EntityImpl implements Parsable, SignIn {
    /** The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only). */
    public appDisplayName?: string | undefined;
    /** The application identifier in Azure Active Directory. Supports $filter (eq operator only). */
    public appId?: string | undefined;
    /** A list of conditional access policies that are triggered by the corresponding sign-in activity. */
    public appliedConditionalAccessPolicies?: AppliedConditionalAccessPolicy[] | undefined;
    /** The legacy client used for sign-in activity. For example: Browser, Exchange ActiveSync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only). */
    public clientAppUsed?: string | undefined;
    /** The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only). */
    public conditionalAccessStatus?: ConditionalAccessStatus | undefined;
    /** The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only). */
    public correlationId?: string | undefined;
    /** The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only). */
    public createdDateTime?: Date | undefined;
    /** The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSystem properties. */
    public deviceDetail?: DeviceDetail | undefined;
    /** The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only). */
    public ipAddress?: string | undefined;
    /** Indicates whether a user sign in is interactive. In interactive sign in, the user provides an authentication factor to Azure AD. These factors include passwords, responses to MFA challenges, biometric factors, or QR codes that a user provides to Azure AD or an associated app. In non-interactive sign in, the user doesn't provide an authentication factor. Instead, the client app uses a token or code to authenticate or access a resource on behalf of a user. Non-interactive sign ins are commonly used for a client to sign in on a user's behalf in a process transparent to the user. */
    public isInteractive?: boolean | undefined;
    /** The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties. */
    public location?: SignInLocation | undefined;
    /** The name of the resource that the user signed in to. Supports $filter (eq operator only). */
    public resourceDisplayName?: string | undefined;
    /** The identifier of the resource that the user signed in to. Supports $filter (eq operator only). */
    public resourceId?: string | undefined;
    /** The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    public riskDetail?: RiskDetail | undefined;
    /** Risk event types associated with the sign-in. The possible values are: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, and unknownFutureValue. Supports $filter (eq operator only). */
    public riskEventTypes?: string[] | undefined;
    /** The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only). */
    public riskEventTypes_v2?: string[] | undefined;
    /** The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    public riskLevelAggregated?: RiskLevel | undefined;
    /** The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden. */
    public riskLevelDuringSignIn?: RiskLevel | undefined;
    /** The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only). */
    public riskState?: RiskState | undefined;
    /** The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property. */
    public status?: SignInStatus | undefined;
    /** The display name of the user. Supports $filter (eq and startsWith operators only). */
    public userDisplayName?: string | undefined;
    /** The identifier of the user. Supports $filter (eq operator only). */
    public userId?: string | undefined;
    /** The UPN of the user. Supports $filter (eq and startsWith operators only). */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new signIn and sets the default values.
     * @param signInParameterValue 
     */
    public constructor(signInParameterValue?: SignIn | undefined) {
        super();
        this.appDisplayName = signInParameterValue?.appDisplayName ;
        this.appId = signInParameterValue?.appId ;
        this.appliedConditionalAccessPolicies = signInParameterValue?.appliedConditionalAccessPolicies ;
        this.clientAppUsed = signInParameterValue?.clientAppUsed ;
        this.conditionalAccessStatus = signInParameterValue?.conditionalAccessStatus ;
        this.correlationId = signInParameterValue?.correlationId ;
        this.createdDateTime = signInParameterValue?.createdDateTime ;
        this.deviceDetail = signInParameterValue?.deviceDetail ;
        this.ipAddress = signInParameterValue?.ipAddress ;
        this.isInteractive = signInParameterValue?.isInteractive ;
        this.location = signInParameterValue?.location ;
        this.resourceDisplayName = signInParameterValue?.resourceDisplayName ;
        this.resourceId = signInParameterValue?.resourceId ;
        this.riskDetail = signInParameterValue?.riskDetail ;
        this.riskEventTypes = signInParameterValue?.riskEventTypes ;
        this.riskEventTypes_v2 = signInParameterValue?.riskEventTypes_v2 ;
        this.riskLevelAggregated = signInParameterValue?.riskLevelAggregated ;
        this.riskLevelDuringSignIn = signInParameterValue?.riskLevelDuringSignIn ;
        this.riskState = signInParameterValue?.riskState ;
        this.status = signInParameterValue?.status ;
        this.userDisplayName = signInParameterValue?.userDisplayName ;
        this.userId = signInParameterValue?.userId ;
        this.userPrincipalName = signInParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "appId": n => { this.appId = n.getStringValue(); },
            "appliedConditionalAccessPolicies": n => { this.appliedConditionalAccessPolicies = n.getCollectionOfObjectValues<AppliedConditionalAccessPolicyImpl>(createAppliedConditionalAccessPolicyFromDiscriminatorValue); },
            "clientAppUsed": n => { this.clientAppUsed = n.getStringValue(); },
            "conditionalAccessStatus": n => { this.conditionalAccessStatus = n.getEnumValue<ConditionalAccessStatus>(ConditionalAccessStatus); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "deviceDetail": n => { this.deviceDetail = n.getObjectValue<DeviceDetailImpl>(createDeviceDetailFromDiscriminatorValue); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "isInteractive": n => { this.isInteractive = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocationImpl>(createSignInLocationFromDiscriminatorValue); },
            "resourceDisplayName": n => { this.resourceDisplayName = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventTypes": n => { this.riskEventTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "riskEventTypes_v2": n => { this.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues<string>(); },
            "riskLevelAggregated": n => { this.riskLevelAggregated = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskLevelDuringSignIn": n => { this.riskLevelDuringSignIn = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "status": n => { this.status = n.getObjectValue<SignInStatusImpl>(createSignInStatusFromDiscriminatorValue); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appDisplayName){
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        }
        if(this.appId){
        writer.writeStringValue("appId", this.appId);
        }
        if(this.appliedConditionalAccessPolicies && this.appliedConditionalAccessPolicies.length != 0){        const appliedConditionalAccessPoliciesArrValue: AppliedConditionalAccessPolicyImpl[] = []; this.appliedConditionalAccessPolicies?.forEach(element => {appliedConditionalAccessPoliciesArrValue.push(new AppliedConditionalAccessPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<AppliedConditionalAccessPolicyImpl>("appliedConditionalAccessPolicies", appliedConditionalAccessPoliciesArrValue);
        }
        if(this.clientAppUsed){
        writer.writeStringValue("clientAppUsed", this.clientAppUsed);
        }
        if(this.conditionalAccessStatus){
        writer.writeEnumValue<ConditionalAccessStatus>("conditionalAccessStatus", this.conditionalAccessStatus);
        }
        if(this.correlationId){
        writer.writeStringValue("correlationId", this.correlationId);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.deviceDetail){
        writer.writeObjectValue<DeviceDetailImpl>("deviceDetail", new DeviceDetailImpl(this.deviceDetail));
        }
        if(this.ipAddress){
        writer.writeStringValue("ipAddress", this.ipAddress);
        }
        if(this.isInteractive){
        writer.writeBooleanValue("isInteractive", this.isInteractive);
        }
        if(this.location){
        writer.writeObjectValue<SignInLocationImpl>("location", new SignInLocationImpl(this.location));
        }
        if(this.resourceDisplayName){
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.riskDetail){
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        }
        if(this.riskEventTypes){
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", this.riskEventTypes);
        }
        if(this.riskEventTypes_v2){
        writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes_v2", this.riskEventTypes_v2);
        }
        if(this.riskLevelAggregated){
        writer.writeEnumValue<RiskLevel>("riskLevelAggregated", this.riskLevelAggregated);
        }
        if(this.riskLevelDuringSignIn){
        writer.writeEnumValue<RiskLevel>("riskLevelDuringSignIn", this.riskLevelDuringSignIn);
        }
        if(this.riskState){
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        }
        if(this.status){
        writer.writeObjectValue<SignInStatusImpl>("status", new SignInStatusImpl(this.status));
        }
        if(this.userDisplayName){
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userId){
        writer.writeStringValue("userId", this.userId);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
