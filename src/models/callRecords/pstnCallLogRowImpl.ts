import {PstnCallDurationSource} from './pstnCallDurationSource';
import {PstnCallLogRow} from './pstnCallLogRow';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PstnCallLogRowImpl implements PstnCallLogRow {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft. */
    private _callDurationSource?: PstnCallDurationSource | undefined;
    /** Number dialed in E.164 format. */
    private _calleeNumber?: string | undefined;
    /** Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format. */
    private _callerNumber?: string | undefined;
    /** Call identifier. Not guaranteed to be unique. */
    private _callId?: string | undefined;
    /** Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference. */
    private _callType?: string | undefined;
    /** Amount of money or cost of the call that is charged to your account. */
    private _charge?: number | undefined;
    /** ID of the audio conference. */
    private _conferenceId?: string | undefined;
    /** Connection fee price. */
    private _connectionCharge?: number | undefined;
    /** Type of currency used to calculate the cost of the call (ISO 4217). */
    private _currency?: string | undefined;
    /** Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location. */
    private _destinationContext?: string | undefined;
    /** Country or region dialed. */
    private _destinationName?: string | undefined;
    /** How long the call was connected, in seconds. */
    private _duration?: number | undefined;
    /** Call end time. */
    private _endDateTime?: Date | undefined;
    /** Unique call identifier. GUID. */
    private _id?: string | undefined;
    /** User's phone number type, such as a service of toll-free number. */
    private _inventoryType?: string | undefined;
    /** The license used for the call. */
    private _licenseCapability?: string | undefined;
    /** The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program. */
    private _operator?: string | undefined;
    /** Call start time. */
    private _startDateTime?: Date | undefined;
    /** Country code of the tenant, ISO 3166-1 alpha-2. */
    private _tenantCountryCode?: string | undefined;
    /** Country code of the user, ISO 3166-1 alpha-2. */
    private _usageCountryCode?: string | undefined;
    /** Display name of the user. */
    private _userDisplayName?: string | undefined;
    /** Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucap_in, ucap_out). */
    private _userId?: string | undefined;
    /** UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the callDurationSource property value. The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft.
     * @returns a pstnCallDurationSource
     */
    public get callDurationSource() {
        return this._callDurationSource;
    };
    /**
     * Sets the callDurationSource property value. The source of the call duration data. If the call uses a third-party telecommunications operator via the Operator Connect Program, the operator may provide their own call duration data. In this case, the property value is operator. Otherwise, the value is microsoft.
     * @param value Value to set for the callDurationSource property.
     */
    public set callDurationSource(value: PstnCallDurationSource | undefined) {
        if(value) {
            this._callDurationSource = value;
        }
    };
    /**
     * Gets the calleeNumber property value. Number dialed in E.164 format.
     * @returns a string
     */
    public get calleeNumber() {
        return this._calleeNumber;
    };
    /**
     * Sets the calleeNumber property value. Number dialed in E.164 format.
     * @param value Value to set for the calleeNumber property.
     */
    public set calleeNumber(value: string | undefined) {
        if(value) {
            this._calleeNumber = value;
        }
    };
    /**
     * Gets the callerNumber property value. Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format.
     * @returns a string
     */
    public get callerNumber() {
        return this._callerNumber;
    };
    /**
     * Sets the callerNumber property value. Number that received the call for inbound calls or the number dialed for outbound calls. E.164 format.
     * @param value Value to set for the callerNumber property.
     */
    public set callerNumber(value: string | undefined) {
        if(value) {
            this._callerNumber = value;
        }
    };
    /**
     * Gets the callId property value. Call identifier. Not guaranteed to be unique.
     * @returns a string
     */
    public get callId() {
        return this._callId;
    };
    /**
     * Sets the callId property value. Call identifier. Not guaranteed to be unique.
     * @param value Value to set for the callId property.
     */
    public set callId(value: string | undefined) {
        if(value) {
            this._callId = value;
        }
    };
    /**
     * Gets the callType property value. Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference.
     * @returns a string
     */
    public get callType() {
        return this._callType;
    };
    /**
     * Sets the callType property value. Whether the call was a PSTN outbound or inbound call and the type of call such as a call placed by a user or an audio conference.
     * @param value Value to set for the callType property.
     */
    public set callType(value: string | undefined) {
        if(value) {
            this._callType = value;
        }
    };
    /**
     * Gets the charge property value. Amount of money or cost of the call that is charged to your account.
     * @returns a decimal
     */
    public get charge() {
        return this._charge;
    };
    /**
     * Sets the charge property value. Amount of money or cost of the call that is charged to your account.
     * @param value Value to set for the charge property.
     */
    public set charge(value: number | undefined) {
        if(value) {
            this._charge = value;
        }
    };
    /**
     * Gets the conferenceId property value. ID of the audio conference.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Sets the conferenceId property value. ID of the audio conference.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        if(value) {
            this._conferenceId = value;
        }
    };
    /**
     * Gets the connectionCharge property value. Connection fee price.
     * @returns a decimal
     */
    public get connectionCharge() {
        return this._connectionCharge;
    };
    /**
     * Sets the connectionCharge property value. Connection fee price.
     * @param value Value to set for the connectionCharge property.
     */
    public set connectionCharge(value: number | undefined) {
        if(value) {
            this._connectionCharge = value;
        }
    };
    /**
     * Instantiates a new pstnCallLogRow and sets the default values.
     * @param pstnCallLogRowParameterValue 
     */
    public constructor(pstnCallLogRowParameterValue?: PstnCallLogRow | undefined) {
        this._additionalData = pstnCallLogRowParameterValue?.additionalData ? pstnCallLogRowParameterValue?.additionalData! : {};
        this._callDurationSource = pstnCallLogRowParameterValue?.callDurationSource;
        this._calleeNumber = pstnCallLogRowParameterValue?.calleeNumber;
        this._callerNumber = pstnCallLogRowParameterValue?.callerNumber;
        this._callId = pstnCallLogRowParameterValue?.callId;
        this._callType = pstnCallLogRowParameterValue?.callType;
        this._charge = pstnCallLogRowParameterValue?.charge;
        this._conferenceId = pstnCallLogRowParameterValue?.conferenceId;
        this._connectionCharge = pstnCallLogRowParameterValue?.connectionCharge;
        this._currency = pstnCallLogRowParameterValue?.currency;
        this._destinationContext = pstnCallLogRowParameterValue?.destinationContext;
        this._destinationName = pstnCallLogRowParameterValue?.destinationName;
        this._duration = pstnCallLogRowParameterValue?.duration;
        this._endDateTime = pstnCallLogRowParameterValue?.endDateTime;
        this._id = pstnCallLogRowParameterValue?.id;
        this._inventoryType = pstnCallLogRowParameterValue?.inventoryType;
        this._licenseCapability = pstnCallLogRowParameterValue?.licenseCapability;
        this._operator = pstnCallLogRowParameterValue?.operator;
        this._startDateTime = pstnCallLogRowParameterValue?.startDateTime;
        this._tenantCountryCode = pstnCallLogRowParameterValue?.tenantCountryCode;
        this._usageCountryCode = pstnCallLogRowParameterValue?.usageCountryCode;
        this._userDisplayName = pstnCallLogRowParameterValue?.userDisplayName;
        this._userId = pstnCallLogRowParameterValue?.userId;
        this._userPrincipalName = pstnCallLogRowParameterValue?.userPrincipalName;
    };
    /**
     * Gets the currency property value. Type of currency used to calculate the cost of the call (ISO 4217).
     * @returns a string
     */
    public get currency() {
        return this._currency;
    };
    /**
     * Sets the currency property value. Type of currency used to calculate the cost of the call (ISO 4217).
     * @param value Value to set for the currency property.
     */
    public set currency(value: string | undefined) {
        if(value) {
            this._currency = value;
        }
    };
    /**
     * Gets the destinationContext property value. Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location.
     * @returns a string
     */
    public get destinationContext() {
        return this._destinationContext;
    };
    /**
     * Sets the destinationContext property value. Whether the call was domestic (within a country or region) or international (outside a country or region) based on the user's location.
     * @param value Value to set for the destinationContext property.
     */
    public set destinationContext(value: string | undefined) {
        if(value) {
            this._destinationContext = value;
        }
    };
    /**
     * Gets the destinationName property value. Country or region dialed.
     * @returns a string
     */
    public get destinationName() {
        return this._destinationName;
    };
    /**
     * Sets the destinationName property value. Country or region dialed.
     * @param value Value to set for the destinationName property.
     */
    public set destinationName(value: string | undefined) {
        if(value) {
            this._destinationName = value;
        }
    };
    /**
     * Gets the duration property value. How long the call was connected, in seconds.
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. How long the call was connected, in seconds.
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        if(value) {
            this._duration = value;
        }
    };
    /**
     * Gets the endDateTime property value. Call end time.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. Call end time.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
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
     * Gets the id property value. Unique call identifier. GUID.
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. Unique call identifier. GUID.
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        if(value) {
            this._id = value;
        }
    };
    /**
     * Gets the inventoryType property value. User's phone number type, such as a service of toll-free number.
     * @returns a string
     */
    public get inventoryType() {
        return this._inventoryType;
    };
    /**
     * Sets the inventoryType property value. User's phone number type, such as a service of toll-free number.
     * @param value Value to set for the inventoryType property.
     */
    public set inventoryType(value: string | undefined) {
        if(value) {
            this._inventoryType = value;
        }
    };
    /**
     * Gets the licenseCapability property value. The license used for the call.
     * @returns a string
     */
    public get licenseCapability() {
        return this._licenseCapability;
    };
    /**
     * Sets the licenseCapability property value. The license used for the call.
     * @param value Value to set for the licenseCapability property.
     */
    public set licenseCapability(value: string | undefined) {
        if(value) {
            this._licenseCapability = value;
        }
    };
    /**
     * Gets the operator property value. The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program.
     * @returns a string
     */
    public get operator() {
        return this._operator;
    };
    /**
     * Sets the operator property value. The telecommunications operator which provided PSTN services for this call. This may be Microsoft, or it may be a third-party operator via the Operator Connect Program.
     * @param value Value to set for the operator property.
     */
    public set operator(value: string | undefined) {
        if(value) {
            this._operator = value;
        }
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
    /**
     * Gets the startDateTime property value. Call start time.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Call start time.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
    /**
     * Gets the tenantCountryCode property value. Country code of the tenant, ISO 3166-1 alpha-2.
     * @returns a string
     */
    public get tenantCountryCode() {
        return this._tenantCountryCode;
    };
    /**
     * Sets the tenantCountryCode property value. Country code of the tenant, ISO 3166-1 alpha-2.
     * @param value Value to set for the tenantCountryCode property.
     */
    public set tenantCountryCode(value: string | undefined) {
        if(value) {
            this._tenantCountryCode = value;
        }
    };
    /**
     * Gets the usageCountryCode property value. Country code of the user, ISO 3166-1 alpha-2.
     * @returns a string
     */
    public get usageCountryCode() {
        return this._usageCountryCode;
    };
    /**
     * Sets the usageCountryCode property value. Country code of the user, ISO 3166-1 alpha-2.
     * @param value Value to set for the usageCountryCode property.
     */
    public set usageCountryCode(value: string | undefined) {
        if(value) {
            this._usageCountryCode = value;
        }
    };
    /**
     * Gets the userDisplayName property value. Display name of the user.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        if(value) {
            this._userDisplayName = value;
        }
    };
    /**
     * Gets the userId property value. Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucap_in, ucap_out).
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Calling user's ID in Graph. GUID. This and other user info will be null/empty for bot call types (ucap_in, ucap_out).
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. UserPrincipalName (sign-in name) in Azure Active Directory. This is usually the same as user's SIP Address, and can be same as user's e-mail address.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
