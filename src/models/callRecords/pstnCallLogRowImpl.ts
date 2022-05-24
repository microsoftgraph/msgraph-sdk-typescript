import {PstnCallDurationSource} from './pstnCallDurationSource';
import {PstnCallLogRow} from './pstnCallLogRow';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PstnCallLogRowImpl implements AdditionalDataHolder, Parsable, PstnCallLogRow {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft. */
    public callDurationSource?: PstnCallDurationSource | undefined;
    /** Number dialed in E.164 format. */
    public calleeNumber?: string | undefined;
    /** Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format. */
    public callerNumber?: string | undefined;
    /** Call identifier. Not guaranteed to be unique. */
    public callId?: string | undefined;
    /** Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference. */
    public callType?: string | undefined;
    /** Amount of money or cost of the call that is charged to your account. */
    public charge?: number | undefined;
    /** ID of the audio conference. */
    public conferenceId?: string | undefined;
    /** Connection fee price. */
    public connectionCharge?: number | undefined;
    /** Type of currency used to calculate the cost of the call (ISO 4217). */
    public currency?: string | undefined;
    /** Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location. */
    public destinationContext?: string | undefined;
    /** Country or region dialed. */
    public destinationName?: string | undefined;
    /** How long the call was connected, in seconds. */
    public duration?: number | undefined;
    /** Call end time. */
    public endDateTime?: Date | undefined;
    /** Unique call identifier. GUID. */
    public id?: string | undefined;
    /** User's phone number type, such as a service of toll-free number. */
    public inventoryType?: string | undefined;
    /** The license used for the call. */
    public licenseCapability?: string | undefined;
    /** The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program. */
    public operator?: string | undefined;
    /** Call start time. */
    public startDateTime?: Date | undefined;
    /** Country code of the tenant, ISO 3166-1 alpha-2. */
    public tenantCountryCode?: string | undefined;
    /** Country code of the user, ISO 3166-1 alpha-2. */
    public usageCountryCode?: string | undefined;
    /** Display name of the user. */
    public userDisplayName?: string | undefined;
    /** Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucap_in, ucap_out). */
    public userId?: string | undefined;
    /** UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new pstnCallLogRow and sets the default values.
     * @param pstnCallLogRowParameterValue 
     */
    public constructor(pstnCallLogRowParameterValue?: PstnCallLogRow | undefined) {
        this.additionalData = pstnCallLogRowParameterValue?.additionalData ? pstnCallLogRowParameterValue?.additionalData! : {}
        this.callDurationSource = pstnCallLogRowParameterValue?.callDurationSource ;
        this.calleeNumber = pstnCallLogRowParameterValue?.calleeNumber ;
        this.callerNumber = pstnCallLogRowParameterValue?.callerNumber ;
        this.callId = pstnCallLogRowParameterValue?.callId ;
        this.callType = pstnCallLogRowParameterValue?.callType ;
        this.charge = pstnCallLogRowParameterValue?.charge ;
        this.conferenceId = pstnCallLogRowParameterValue?.conferenceId ;
        this.connectionCharge = pstnCallLogRowParameterValue?.connectionCharge ;
        this.currency = pstnCallLogRowParameterValue?.currency ;
        this.destinationContext = pstnCallLogRowParameterValue?.destinationContext ;
        this.destinationName = pstnCallLogRowParameterValue?.destinationName ;
        this.duration = pstnCallLogRowParameterValue?.duration ;
        this.endDateTime = pstnCallLogRowParameterValue?.endDateTime ;
        this.id = pstnCallLogRowParameterValue?.id ;
        this.inventoryType = pstnCallLogRowParameterValue?.inventoryType ;
        this.licenseCapability = pstnCallLogRowParameterValue?.licenseCapability ;
        this.operator = pstnCallLogRowParameterValue?.operator ;
        this.startDateTime = pstnCallLogRowParameterValue?.startDateTime ;
        this.tenantCountryCode = pstnCallLogRowParameterValue?.tenantCountryCode ;
        this.usageCountryCode = pstnCallLogRowParameterValue?.usageCountryCode ;
        this.userDisplayName = pstnCallLogRowParameterValue?.userDisplayName ;
        this.userId = pstnCallLogRowParameterValue?.userId ;
        this.userPrincipalName = pstnCallLogRowParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "callDurationSource": n => { this.callDurationSource = n.getEnumValue<PstnCallDurationSource>(PstnCallDurationSource); },
            "calleeNumber": n => { this.calleeNumber = n.getStringValue(); },
            "callerNumber": n => { this.callerNumber = n.getStringValue(); },
            "callId": n => { this.callId = n.getStringValue(); },
            "callType": n => { this.callType = n.getStringValue(); },
            "charge": n => { this.charge = n.getNumberValue(); },
            "conferenceId": n => { this.conferenceId = n.getStringValue(); },
            "connectionCharge": n => { this.connectionCharge = n.getNumberValue(); },
            "currency": n => { this.currency = n.getStringValue(); },
            "destinationContext": n => { this.destinationContext = n.getStringValue(); },
            "destinationName": n => { this.destinationName = n.getStringValue(); },
            "duration": n => { this.duration = n.getNumberValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "inventoryType": n => { this.inventoryType = n.getStringValue(); },
            "licenseCapability": n => { this.licenseCapability = n.getStringValue(); },
            "operator": n => { this.operator = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "tenantCountryCode": n => { this.tenantCountryCode = n.getStringValue(); },
            "usageCountryCode": n => { this.usageCountryCode = n.getStringValue(); },
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
        if(this.callDurationSource){
        writer.writeEnumValue<PstnCallDurationSource>("callDurationSource", this.callDurationSource);
        }
        if(this.calleeNumber){
        writer.writeStringValue("calleeNumber", this.calleeNumber);
        }
        if(this.callerNumber){
        writer.writeStringValue("callerNumber", this.callerNumber);
        }
        if(this.callId){
        writer.writeStringValue("callId", this.callId);
        }
        if(this.callType){
        writer.writeStringValue("callType", this.callType);
        }
        if(this.charge){
        writer.writeNumberValue("charge", this.charge);
        }
        if(this.conferenceId){
        writer.writeStringValue("conferenceId", this.conferenceId);
        }
        if(this.connectionCharge){
        writer.writeNumberValue("connectionCharge", this.connectionCharge);
        }
        if(this.currency){
        writer.writeStringValue("currency", this.currency);
        }
        if(this.destinationContext){
        writer.writeStringValue("destinationContext", this.destinationContext);
        }
        if(this.destinationName){
        writer.writeStringValue("destinationName", this.destinationName);
        }
        if(this.duration){
        writer.writeNumberValue("duration", this.duration);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.inventoryType){
        writer.writeStringValue("inventoryType", this.inventoryType);
        }
        if(this.licenseCapability){
        writer.writeStringValue("licenseCapability", this.licenseCapability);
        }
        if(this.operator){
        writer.writeStringValue("operator", this.operator);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.tenantCountryCode){
        writer.writeStringValue("tenantCountryCode", this.tenantCountryCode);
        }
        if(this.usageCountryCode){
        writer.writeStringValue("usageCountryCode", this.usageCountryCode);
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
