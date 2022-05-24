import {ActivityType} from './activityType';
import {createSignInLocationFromDiscriminatorValue} from './createSignInLocationFromDiscriminatorValue';
import {EntityImpl, SignInLocationImpl} from './index';
import {RiskDetail} from './riskDetail';
import {RiskDetection} from './riskDetection';
import {RiskDetectionTimingType} from './riskDetectionTimingType';
import {RiskLevel} from './riskLevel';
import {RiskState} from './riskState';
import {SignInLocation} from './signInLocation';
import {TokenIssuerType} from './tokenIssuerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityProtectionRoot singleton. */
export class RiskDetectionImpl extends EntityImpl implements Parsable, RiskDetection {
    /** Indicates the activity type the detected risk is linked to. The possible values are signin, user, unknownFutureValue. */
    public activity?: ActivityType | undefined;
    /** Date and time that the risky activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public activityDateTime?: Date | undefined;
    /** Additional information associated with the risk detection in JSON format. */
    public additionalInfo?: string | undefined;
    /** Correlation ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in. */
    public correlationId?: string | undefined;
    /** Date and time that the risk was detected. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public detectedDateTime?: Date | undefined;
    /** Timing of the detected risk (real-time/offline). The possible values are notDefined, realtime, nearRealtime, offline, unknownFutureValue. */
    public detectionTimingType?: RiskDetectionTimingType | undefined;
    /** Provides the IP address of the client from where the risk occurred. */
    public ipAddress?: string | undefined;
    /** Date and time that the risk detection was last updated. */
    public lastUpdatedDateTime?: Date | undefined;
    /** Location of the sign-in. */
    public location?: SignInLocation | undefined;
    /** Request ID of the sign-in associated with the risk detection. This property is null if the risk detection is not associated with a sign-in. */
    public requestId?: string | undefined;
    /** Details of the detected risk. The possible values are none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, hidden, adminConfirmedUserCompromised, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden. */
    public riskDetail?: RiskDetail | undefined;
    /** The type of risk event detected. The possible values are unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence, generic,adminConfirmedUserCompromised, mcasImpossibleTravel, mcasSuspiciousInboxManipulationRules, investigationsThreatIntelligenceSigninLinked, maliciousIPAddressValidCredentialsBlockedIP, and unknownFutureValue.  For more information about each value, see riskEventType values. */
    public riskEventType?: string | undefined;
    /** Level of the detected risk. The possible values are low, medium, high, hidden, none, unknownFutureValue. Note: Details for this property are only available for Azure AD Premium P2 customers. P1 customers will be returned hidden. */
    public riskLevel?: RiskLevel | undefined;
    /** The state of a detected risky user or sign-in. The possible values are none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, and unknownFutureValue. */
    public riskState?: RiskState | undefined;
    /** Source of the risk detection. For example, activeDirectory. */
    public source?: string | undefined;
    /** Indicates the type of token issuer for the detected sign-in risk. The possible values are AzureAD, ADFederationServices, and unknownFutureValue. */
    public tokenIssuerType?: TokenIssuerType | undefined;
    /** Name of the user. */
    public userDisplayName?: string | undefined;
    /** Unique ID of the user.  The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public userId?: string | undefined;
    /** The user principal name (UPN) of the user. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new riskDetection and sets the default values.
     * @param riskDetectionParameterValue 
     */
    public constructor(riskDetectionParameterValue?: RiskDetection | undefined) {
        super();
        this.activity = riskDetectionParameterValue?.activity ;
        this.activityDateTime = riskDetectionParameterValue?.activityDateTime ;
        this.additionalInfo = riskDetectionParameterValue?.additionalInfo ;
        this.correlationId = riskDetectionParameterValue?.correlationId ;
        this.detectedDateTime = riskDetectionParameterValue?.detectedDateTime ;
        this.detectionTimingType = riskDetectionParameterValue?.detectionTimingType ;
        this.ipAddress = riskDetectionParameterValue?.ipAddress ;
        this.lastUpdatedDateTime = riskDetectionParameterValue?.lastUpdatedDateTime ;
        this.location = riskDetectionParameterValue?.location ;
        this.requestId = riskDetectionParameterValue?.requestId ;
        this.riskDetail = riskDetectionParameterValue?.riskDetail ;
        this.riskEventType = riskDetectionParameterValue?.riskEventType ;
        this.riskLevel = riskDetectionParameterValue?.riskLevel ;
        this.riskState = riskDetectionParameterValue?.riskState ;
        this.source = riskDetectionParameterValue?.source ;
        this.tokenIssuerType = riskDetectionParameterValue?.tokenIssuerType ;
        this.userDisplayName = riskDetectionParameterValue?.userDisplayName ;
        this.userId = riskDetectionParameterValue?.userId ;
        this.userPrincipalName = riskDetectionParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activity": n => { this.activity = n.getEnumValue<ActivityType>(ActivityType); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "additionalInfo": n => { this.additionalInfo = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "detectedDateTime": n => { this.detectedDateTime = n.getDateValue(); },
            "detectionTimingType": n => { this.detectionTimingType = n.getEnumValue<RiskDetectionTimingType>(RiskDetectionTimingType); },
            "ipAddress": n => { this.ipAddress = n.getStringValue(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "location": n => { this.location = n.getObjectValue<SignInLocationImpl>(createSignInLocationFromDiscriminatorValue); },
            "requestId": n => { this.requestId = n.getStringValue(); },
            "riskDetail": n => { this.riskDetail = n.getEnumValue<RiskDetail>(RiskDetail); },
            "riskEventType": n => { this.riskEventType = n.getStringValue(); },
            "riskLevel": n => { this.riskLevel = n.getEnumValue<RiskLevel>(RiskLevel); },
            "riskState": n => { this.riskState = n.getEnumValue<RiskState>(RiskState); },
            "source": n => { this.source = n.getStringValue(); },
            "tokenIssuerType": n => { this.tokenIssuerType = n.getEnumValue<TokenIssuerType>(TokenIssuerType); },
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
        if(this.activity){
        writer.writeEnumValue<ActivityType>("activity", this.activity);
        }
        if(this.activityDateTime){
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        }
        if(this.additionalInfo){
        writer.writeStringValue("additionalInfo", this.additionalInfo);
        }
        if(this.correlationId){
        writer.writeStringValue("correlationId", this.correlationId);
        }
        if(this.detectedDateTime){
        writer.writeDateValue("detectedDateTime", this.detectedDateTime);
        }
        if(this.detectionTimingType){
        writer.writeEnumValue<RiskDetectionTimingType>("detectionTimingType", this.detectionTimingType);
        }
        if(this.ipAddress){
        writer.writeStringValue("ipAddress", this.ipAddress);
        }
        if(this.lastUpdatedDateTime){
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        }
        if(this.location){
        writer.writeObjectValue<SignInLocationImpl>("location", new SignInLocationImpl(this.location));
        }
        if(this.requestId){
        writer.writeStringValue("requestId", this.requestId);
        }
        if(this.riskDetail){
        writer.writeEnumValue<RiskDetail>("riskDetail", this.riskDetail);
        }
        if(this.riskEventType){
        writer.writeStringValue("riskEventType", this.riskEventType);
        }
        if(this.riskLevel){
        writer.writeEnumValue<RiskLevel>("riskLevel", this.riskLevel);
        }
        if(this.riskState){
        writer.writeEnumValue<RiskState>("riskState", this.riskState);
        }
        if(this.source){
        writer.writeStringValue("source", this.source);
        }
        if(this.tokenIssuerType){
        writer.writeEnumValue<TokenIssuerType>("tokenIssuerType", this.tokenIssuerType);
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
