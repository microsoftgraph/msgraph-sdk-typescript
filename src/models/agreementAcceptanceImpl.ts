import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementAcceptanceState} from './agreementAcceptanceState';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class AgreementAcceptanceImpl extends EntityImpl implements AgreementAcceptance {
    /** ID of the agreement file accepted by the user. */
    private _agreementFileId?: string | undefined;
    /** ID of the agreement. */
    private _agreementId?: string | undefined;
    /** The display name of the device used for accepting the agreement. */
    private _deviceDisplayName?: string | undefined;
    /** The unique identifier of the device used for accepting the agreement. */
    private _deviceId?: string | undefined;
    /** The operating system used for accepting the agreement. */
    private _deviceOSType?: string | undefined;
    /** The operating system version of the device used for accepting the agreement. */
    private _deviceOSVersion?: string | undefined;
    /** The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _expirationDateTime?: Date | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _recordedDateTime?: Date | undefined;
    /** Possible values are: accepted, declined. Supports $filter (eq). */
    private _state?: AgreementAcceptanceState | undefined;
    /** Display name of the user when the acceptance was recorded. */
    private _userDisplayName?: string | undefined;
    /** Email of the user when the acceptance was recorded. */
    private _userEmail?: string | undefined;
    /** ID of the user who accepted the agreement. */
    private _userId?: string | undefined;
    /** UPN of the user when the acceptance was recorded. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the agreementFileId property value. ID of the agreement file accepted by the user.
     * @returns a string
     */
    public get agreementFileId() {
        return this._agreementFileId;
    };
    /**
     * Sets the agreementFileId property value. ID of the agreement file accepted by the user.
     * @param value Value to set for the agreementFileId property.
     */
    public set agreementFileId(value: string | undefined) {
        if(value) {
            this._agreementFileId = value;
        }
    };
    /**
     * Gets the agreementId property value. ID of the agreement.
     * @returns a string
     */
    public get agreementId() {
        return this._agreementId;
    };
    /**
     * Sets the agreementId property value. ID of the agreement.
     * @param value Value to set for the agreementId property.
     */
    public set agreementId(value: string | undefined) {
        if(value) {
            this._agreementId = value;
        }
    };
    /**
     * Instantiates a new agreementAcceptance and sets the default values.
     * @param agreementAcceptanceParameterValue 
     */
    public constructor(agreementAcceptanceParameterValue?: AgreementAcceptance | undefined) {
        super(agreementAcceptanceParameterValue);
        this._agreementFileId = agreementAcceptanceParameterValue?.agreementFileId;
        this._agreementId = agreementAcceptanceParameterValue?.agreementId;
        this._deviceDisplayName = agreementAcceptanceParameterValue?.deviceDisplayName;
        this._deviceId = agreementAcceptanceParameterValue?.deviceId;
        this._deviceOSType = agreementAcceptanceParameterValue?.deviceOSType;
        this._deviceOSVersion = agreementAcceptanceParameterValue?.deviceOSVersion;
        this._expirationDateTime = agreementAcceptanceParameterValue?.expirationDateTime;
        this._recordedDateTime = agreementAcceptanceParameterValue?.recordedDateTime;
        this._state = agreementAcceptanceParameterValue?.state;
        this._userDisplayName = agreementAcceptanceParameterValue?.userDisplayName;
        this._userEmail = agreementAcceptanceParameterValue?.userEmail;
        this._userId = agreementAcceptanceParameterValue?.userId;
        this._userPrincipalName = agreementAcceptanceParameterValue?.userPrincipalName;
    };
    /**
     * Gets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
     * @returns a string
     */
    public get deviceDisplayName() {
        return this._deviceDisplayName;
    };
    /**
     * Sets the deviceDisplayName property value. The display name of the device used for accepting the agreement.
     * @param value Value to set for the deviceDisplayName property.
     */
    public set deviceDisplayName(value: string | undefined) {
        if(value) {
            this._deviceDisplayName = value;
        }
    };
    /**
     * Gets the deviceId property value. The unique identifier of the device used for accepting the agreement.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. The unique identifier of the device used for accepting the agreement.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        if(value) {
            this._deviceId = value;
        }
    };
    /**
     * Gets the deviceOSType property value. The operating system used for accepting the agreement.
     * @returns a string
     */
    public get deviceOSType() {
        return this._deviceOSType;
    };
    /**
     * Sets the deviceOSType property value. The operating system used for accepting the agreement.
     * @param value Value to set for the deviceOSType property.
     */
    public set deviceOSType(value: string | undefined) {
        if(value) {
            this._deviceOSType = value;
        }
    };
    /**
     * Gets the deviceOSVersion property value. The operating system version of the device used for accepting the agreement.
     * @returns a string
     */
    public get deviceOSVersion() {
        return this._deviceOSVersion;
    };
    /**
     * Sets the deviceOSVersion property value. The operating system version of the device used for accepting the agreement.
     * @param value Value to set for the deviceOSVersion property.
     */
    public set deviceOSVersion(value: string | undefined) {
        if(value) {
            this._deviceOSVersion = value;
        }
    };
    /**
     * Gets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expiration date time of the acceptance. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        if(value) {
            this._expirationDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "agreementFileId": n => { this.agreementFileId = n.getStringValue(); },
            "agreementId": n => { this.agreementId = n.getStringValue(); },
            "deviceDisplayName": n => { this.deviceDisplayName = n.getStringValue(); },
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceOSType": n => { this.deviceOSType = n.getStringValue(); },
            "deviceOSVersion": n => { this.deviceOSVersion = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "recordedDateTime": n => { this.recordedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<AgreementAcceptanceState>(AgreementAcceptanceState); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userEmail": n => { this.userEmail = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get recordedDateTime() {
        return this._recordedDateTime;
    };
    /**
     * Sets the recordedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the recordedDateTime property.
     */
    public set recordedDateTime(value: Date | undefined) {
        if(value) {
            this._recordedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.agreementFileId){
            writer.writeStringValue("agreementFileId", this.agreementFileId);
        }
        if(this.agreementId){
            writer.writeStringValue("agreementId", this.agreementId);
        }
        if(this.deviceDisplayName){
            writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        }
        if(this.deviceId){
            writer.writeStringValue("deviceId", this.deviceId);
        }
        if(this.deviceOSType){
            writer.writeStringValue("deviceOSType", this.deviceOSType);
        }
        if(this.deviceOSVersion){
            writer.writeStringValue("deviceOSVersion", this.deviceOSVersion);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.recordedDateTime){
            writer.writeDateValue("recordedDateTime", this.recordedDateTime);
        }
        if(this.state){
            writer.writeEnumValue<AgreementAcceptanceState>("state", this.state);
        }
        if(this.userDisplayName){
            writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userEmail){
            writer.writeStringValue("userEmail", this.userEmail);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
    /**
     * Gets the state property value. Possible values are: accepted, declined. Supports $filter (eq).
     * @returns a agreementAcceptanceState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Possible values are: accepted, declined. Supports $filter (eq).
     * @param value Value to set for the state property.
     */
    public set state(value: AgreementAcceptanceState | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the userDisplayName property value. Display name of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user when the acceptance was recorded.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        if(value) {
            this._userDisplayName = value;
        }
    };
    /**
     * Gets the userEmail property value. Email of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Sets the userEmail property value. Email of the user when the acceptance was recorded.
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        if(value) {
            this._userEmail = value;
        }
    };
    /**
     * Gets the userId property value. ID of the user who accepted the agreement.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. ID of the user who accepted the agreement.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        if(value) {
            this._userId = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. UPN of the user when the acceptance was recorded.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
