import {DirectRoutingLogRow} from './directRoutingLogRow';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectRoutingLogRowImpl implements AdditionalDataHolder, DirectRoutingLogRow, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of the user or bot who received the call. E.164 format, but may include additional data. */
    public calleeNumber?: string | undefined;
    /** In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue. */
    public callEndSubReason?: number | undefined;
    /** Number of the user or bot who made the call. E.164 format, but may include additional data. */
    public callerNumber?: string | undefined;
    /** Call type and direction. */
    public callType?: string | undefined;
    /** Identifier for the call that you can use when calling Microsoft Support. GUID. */
    public correlationId?: string | undefined;
    /** Duration of the call in seconds. */
    public duration?: number | undefined;
    /** Only exists for successful (fully established) calls. Time when call ended. */
    public endDateTime?: Date | undefined;
    /** Only exists for failed (not fully established) calls. */
    public failureDateTime?: Date | undefined;
    /** The code with which the call ended, RFC 3261. */
    public finalSipCode?: number | undefined;
    /** Description of the SIP code and Microsoft subcode. */
    public finalSipCodePhrase?: string | undefined;
    /** Unique call identifier. GUID. */
    public id?: string | undefined;
    /** When the initial invite was sent. */
    public inviteDateTime?: Date | undefined;
    /** Indicates if the trunk was enabled for media bypass or not. */
    public mediaBypassEnabled?: boolean | undefined;
    /** The datacenter used for media path in non-bypass call. */
    public mediaPathLocation?: string | undefined;
    /** The datacenter used for signaling for both bypass and non-bypass calls. */
    public signalingLocation?: string | undefined;
    /** Call start time.For failed and unanswered calls, this can be equal to invite or failure time. */
    public startDateTime?: Date | undefined;
    /** Success or attempt. */
    public successfulCall?: boolean | undefined;
    /** Fully qualified domain name of the session border controller. */
    public trunkFullyQualifiedDomainName?: string | undefined;
    /** Display name of the user. */
    public userDisplayName?: string | undefined;
    /** Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID. */
    public userId?: string | undefined;
    /** UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new directRoutingLogRow and sets the default values.
     * @param directRoutingLogRowParameterValue 
     */
    public constructor(directRoutingLogRowParameterValue?: DirectRoutingLogRow | undefined) {
        this.additionalData = directRoutingLogRowParameterValue?.additionalData ? directRoutingLogRowParameterValue?.additionalData! : {}
        this.calleeNumber = directRoutingLogRowParameterValue?.calleeNumber ;
        this.callEndSubReason = directRoutingLogRowParameterValue?.callEndSubReason ;
        this.callerNumber = directRoutingLogRowParameterValue?.callerNumber ;
        this.callType = directRoutingLogRowParameterValue?.callType ;
        this.correlationId = directRoutingLogRowParameterValue?.correlationId ;
        this.duration = directRoutingLogRowParameterValue?.duration ;
        this.endDateTime = directRoutingLogRowParameterValue?.endDateTime ;
        this.failureDateTime = directRoutingLogRowParameterValue?.failureDateTime ;
        this.finalSipCode = directRoutingLogRowParameterValue?.finalSipCode ;
        this.finalSipCodePhrase = directRoutingLogRowParameterValue?.finalSipCodePhrase ;
        this.id = directRoutingLogRowParameterValue?.id ;
        this.inviteDateTime = directRoutingLogRowParameterValue?.inviteDateTime ;
        this.mediaBypassEnabled = directRoutingLogRowParameterValue?.mediaBypassEnabled ;
        this.mediaPathLocation = directRoutingLogRowParameterValue?.mediaPathLocation ;
        this.signalingLocation = directRoutingLogRowParameterValue?.signalingLocation ;
        this.startDateTime = directRoutingLogRowParameterValue?.startDateTime ;
        this.successfulCall = directRoutingLogRowParameterValue?.successfulCall ;
        this.trunkFullyQualifiedDomainName = directRoutingLogRowParameterValue?.trunkFullyQualifiedDomainName ;
        this.userDisplayName = directRoutingLogRowParameterValue?.userDisplayName ;
        this.userId = directRoutingLogRowParameterValue?.userId ;
        this.userPrincipalName = directRoutingLogRowParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calleeNumber": n => { this.calleeNumber = n.getStringValue(); },
            "callEndSubReason": n => { this.callEndSubReason = n.getNumberValue(); },
            "callerNumber": n => { this.callerNumber = n.getStringValue(); },
            "callType": n => { this.callType = n.getStringValue(); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "duration": n => { this.duration = n.getNumberValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "failureDateTime": n => { this.failureDateTime = n.getDateValue(); },
            "finalSipCode": n => { this.finalSipCode = n.getNumberValue(); },
            "finalSipCodePhrase": n => { this.finalSipCodePhrase = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "inviteDateTime": n => { this.inviteDateTime = n.getDateValue(); },
            "mediaBypassEnabled": n => { this.mediaBypassEnabled = n.getBooleanValue(); },
            "mediaPathLocation": n => { this.mediaPathLocation = n.getStringValue(); },
            "signalingLocation": n => { this.signalingLocation = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "successfulCall": n => { this.successfulCall = n.getBooleanValue(); },
            "trunkFullyQualifiedDomainName": n => { this.trunkFullyQualifiedDomainName = n.getStringValue(); },
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
        if(this.calleeNumber){
        writer.writeStringValue("calleeNumber", this.calleeNumber);
        }
        if(this.callEndSubReason){
        writer.writeNumberValue("callEndSubReason", this.callEndSubReason);
        }
        if(this.callerNumber){
        writer.writeStringValue("callerNumber", this.callerNumber);
        }
        if(this.callType){
        writer.writeStringValue("callType", this.callType);
        }
        if(this.correlationId){
        writer.writeStringValue("correlationId", this.correlationId);
        }
        if(this.duration){
        writer.writeNumberValue("duration", this.duration);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.failureDateTime){
        writer.writeDateValue("failureDateTime", this.failureDateTime);
        }
        if(this.finalSipCode){
        writer.writeNumberValue("finalSipCode", this.finalSipCode);
        }
        if(this.finalSipCodePhrase){
        writer.writeStringValue("finalSipCodePhrase", this.finalSipCodePhrase);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.inviteDateTime){
        writer.writeDateValue("inviteDateTime", this.inviteDateTime);
        }
        if(this.mediaBypassEnabled){
        writer.writeBooleanValue("mediaBypassEnabled", this.mediaBypassEnabled);
        }
        if(this.mediaPathLocation){
        writer.writeStringValue("mediaPathLocation", this.mediaPathLocation);
        }
        if(this.signalingLocation){
        writer.writeStringValue("signalingLocation", this.signalingLocation);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.successfulCall){
        writer.writeBooleanValue("successfulCall", this.successfulCall);
        }
        if(this.trunkFullyQualifiedDomainName){
        writer.writeStringValue("trunkFullyQualifiedDomainName", this.trunkFullyQualifiedDomainName);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
