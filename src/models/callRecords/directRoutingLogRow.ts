import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectRoutingLogRow implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Number of the user or bot who received the call. E.164 format, but may include additional data. */
    private _calleeNumber?: string | undefined;
    /** In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue. */
    private _callEndSubReason?: number | undefined;
    /** Number of the user or bot who made the call. E.164 format, but may include additional data. */
    private _callerNumber?: string | undefined;
    /** Call type and direction. */
    private _callType?: string | undefined;
    /** Identifier for the call that you can use when calling Microsoft Support. GUID. */
    private _correlationId?: string | undefined;
    /** Duration of the call in seconds. */
    private _duration?: number | undefined;
    /** Only exists for successful (fully established) calls. Time when call ended. */
    private _endDateTime?: Date | undefined;
    /** Only exists for failed (not fully established) calls. */
    private _failureDateTime?: Date | undefined;
    /** The code with which the call ended, RFC 3261. */
    private _finalSipCode?: number | undefined;
    /** Description of the SIP code and Microsoft subcode. */
    private _finalSipCodePhrase?: string | undefined;
    /** Unique call identifier. GUID. */
    private _id?: string | undefined;
    /** When the initial invite was sent. */
    private _inviteDateTime?: Date | undefined;
    /** Indicates if the trunk was enabled for media bypass or not. */
    private _mediaBypassEnabled?: boolean | undefined;
    /** The datacenter used for media path in non-bypass call. */
    private _mediaPathLocation?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The datacenter used for signaling for both bypass and non-bypass calls. */
    private _signalingLocation?: string | undefined;
    /** Call start time.For failed and unanswered calls, this can be equal to invite or failure time. */
    private _startDateTime?: Date | undefined;
    /** Success or attempt. */
    private _successfulCall?: boolean | undefined;
    /** Fully qualified domain name of the session border controller. */
    private _trunkFullyQualifiedDomainName?: string | undefined;
    /** Display name of the user. */
    private _userDisplayName?: string | undefined;
    /** Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID. */
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the calleeNumber property value. Number of the user or bot who received the call. E.164 format, but may include additional data.
     * @returns a string
     */
    public get calleeNumber() {
        return this._calleeNumber;
    };
    /**
     * Sets the calleeNumber property value. Number of the user or bot who received the call. E.164 format, but may include additional data.
     * @param value Value to set for the calleeNumber property.
     */
    public set calleeNumber(value: string | undefined) {
        this._calleeNumber = value;
    };
    /**
     * Gets the callEndSubReason property value. In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue.
     * @returns a integer
     */
    public get callEndSubReason() {
        return this._callEndSubReason;
    };
    /**
     * Sets the callEndSubReason property value. In addition to the SIP codes, Microsoft has own subcodes that indicate the specific issue.
     * @param value Value to set for the callEndSubReason property.
     */
    public set callEndSubReason(value: number | undefined) {
        this._callEndSubReason = value;
    };
    /**
     * Gets the callerNumber property value. Number of the user or bot who made the call. E.164 format, but may include additional data.
     * @returns a string
     */
    public get callerNumber() {
        return this._callerNumber;
    };
    /**
     * Sets the callerNumber property value. Number of the user or bot who made the call. E.164 format, but may include additional data.
     * @param value Value to set for the callerNumber property.
     */
    public set callerNumber(value: string | undefined) {
        this._callerNumber = value;
    };
    /**
     * Gets the callType property value. Call type and direction.
     * @returns a string
     */
    public get callType() {
        return this._callType;
    };
    /**
     * Sets the callType property value. Call type and direction.
     * @param value Value to set for the callType property.
     */
    public set callType(value: string | undefined) {
        this._callType = value;
    };
    /**
     * Instantiates a new directRoutingLogRow and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.callRecords.directRoutingLogRow";
    };
    /**
     * Gets the correlationId property value. Identifier for the call that you can use when calling Microsoft Support. GUID.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. Identifier for the call that you can use when calling Microsoft Support. GUID.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the duration property value. Duration of the call in seconds.
     * @returns a integer
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. Duration of the call in seconds.
     * @param value Value to set for the duration property.
     */
    public set duration(value: number | undefined) {
        this._duration = value;
    };
    /**
     * Gets the endDateTime property value. Only exists for successful (fully established) calls. Time when call ended.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. Only exists for successful (fully established) calls. Time when call ended.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the failureDateTime property value. Only exists for failed (not fully established) calls.
     * @returns a Date
     */
    public get failureDateTime() {
        return this._failureDateTime;
    };
    /**
     * Sets the failureDateTime property value. Only exists for failed (not fully established) calls.
     * @param value Value to set for the failureDateTime property.
     */
    public set failureDateTime(value: Date | undefined) {
        this._failureDateTime = value;
    };
    /**
     * Gets the finalSipCode property value. The code with which the call ended, RFC 3261.
     * @returns a integer
     */
    public get finalSipCode() {
        return this._finalSipCode;
    };
    /**
     * Sets the finalSipCode property value. The code with which the call ended, RFC 3261.
     * @param value Value to set for the finalSipCode property.
     */
    public set finalSipCode(value: number | undefined) {
        this._finalSipCode = value;
    };
    /**
     * Gets the finalSipCodePhrase property value. Description of the SIP code and Microsoft subcode.
     * @returns a string
     */
    public get finalSipCodePhrase() {
        return this._finalSipCodePhrase;
    };
    /**
     * Sets the finalSipCodePhrase property value. Description of the SIP code and Microsoft subcode.
     * @param value Value to set for the finalSipCodePhrase property.
     */
    public set finalSipCodePhrase(value: string | undefined) {
        this._finalSipCodePhrase = value;
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        this._id = value;
    };
    /**
     * Gets the inviteDateTime property value. When the initial invite was sent.
     * @returns a Date
     */
    public get inviteDateTime() {
        return this._inviteDateTime;
    };
    /**
     * Sets the inviteDateTime property value. When the initial invite was sent.
     * @param value Value to set for the inviteDateTime property.
     */
    public set inviteDateTime(value: Date | undefined) {
        this._inviteDateTime = value;
    };
    /**
     * Gets the mediaBypassEnabled property value. Indicates if the trunk was enabled for media bypass or not.
     * @returns a boolean
     */
    public get mediaBypassEnabled() {
        return this._mediaBypassEnabled;
    };
    /**
     * Sets the mediaBypassEnabled property value. Indicates if the trunk was enabled for media bypass or not.
     * @param value Value to set for the mediaBypassEnabled property.
     */
    public set mediaBypassEnabled(value: boolean | undefined) {
        this._mediaBypassEnabled = value;
    };
    /**
     * Gets the mediaPathLocation property value. The datacenter used for media path in non-bypass call.
     * @returns a string
     */
    public get mediaPathLocation() {
        return this._mediaPathLocation;
    };
    /**
     * Sets the mediaPathLocation property value. The datacenter used for media path in non-bypass call.
     * @param value Value to set for the mediaPathLocation property.
     */
    public set mediaPathLocation(value: string | undefined) {
        this._mediaPathLocation = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("calleeNumber", this.calleeNumber);
        writer.writeNumberValue("callEndSubReason", this.callEndSubReason);
        writer.writeStringValue("callerNumber", this.callerNumber);
        writer.writeStringValue("callType", this.callType);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeNumberValue("duration", this.duration);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeDateValue("failureDateTime", this.failureDateTime);
        writer.writeNumberValue("finalSipCode", this.finalSipCode);
        writer.writeStringValue("finalSipCodePhrase", this.finalSipCodePhrase);
        writer.writeStringValue("id", this.id);
        writer.writeDateValue("inviteDateTime", this.inviteDateTime);
        writer.writeBooleanValue("mediaBypassEnabled", this.mediaBypassEnabled);
        writer.writeStringValue("mediaPathLocation", this.mediaPathLocation);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("signalingLocation", this.signalingLocation);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeBooleanValue("successfulCall", this.successfulCall);
        writer.writeStringValue("trunkFullyQualifiedDomainName", this.trunkFullyQualifiedDomainName);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the signalingLocation property value. The datacenter used for signaling for both bypass and non-bypass calls.
     * @returns a string
     */
    public get signalingLocation() {
        return this._signalingLocation;
    };
    /**
     * Sets the signalingLocation property value. The datacenter used for signaling for both bypass and non-bypass calls.
     * @param value Value to set for the signalingLocation property.
     */
    public set signalingLocation(value: string | undefined) {
        this._signalingLocation = value;
    };
    /**
     * Gets the startDateTime property value. Call start time.For failed and unanswered calls, this can be equal to invite or failure time.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Call start time.For failed and unanswered calls, this can be equal to invite or failure time.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the successfulCall property value. Success or attempt.
     * @returns a boolean
     */
    public get successfulCall() {
        return this._successfulCall;
    };
    /**
     * Sets the successfulCall property value. Success or attempt.
     * @param value Value to set for the successfulCall property.
     */
    public set successfulCall(value: boolean | undefined) {
        this._successfulCall = value;
    };
    /**
     * Gets the trunkFullyQualifiedDomainName property value. Fully qualified domain name of the session border controller.
     * @returns a string
     */
    public get trunkFullyQualifiedDomainName() {
        return this._trunkFullyQualifiedDomainName;
    };
    /**
     * Sets the trunkFullyQualifiedDomainName property value. Fully qualified domain name of the session border controller.
     * @param value Value to set for the trunkFullyQualifiedDomainName property.
     */
    public set trunkFullyQualifiedDomainName(value: string | undefined) {
        this._trunkFullyQualifiedDomainName = value;
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
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Calling user's ID in Graph. This and other user info will be null/empty for bot call types. GUID.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
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
        this._userPrincipalName = value;
    };
}
