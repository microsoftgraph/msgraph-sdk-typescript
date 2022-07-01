import {createWindowsDeviceAccountFromDiscriminatorValue} from './createWindowsDeviceAccountFromDiscriminatorValue';
import {WindowsDeviceAccountImpl} from './index';
import {UpdateWindowsDeviceAccountActionParameter} from './updateWindowsDeviceAccountActionParameter';
import {WindowsDeviceAccount} from './windowsDeviceAccount';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateWindowsDeviceAccountActionParameterImpl implements UpdateWindowsDeviceAccountActionParameter {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Not yet documented */
    private _calendarSyncEnabled?: boolean | undefined;
    /** Not yet documented */
    private _deviceAccount?: WindowsDeviceAccount | undefined;
    /** Not yet documented */
    private _deviceAccountEmail?: string | undefined;
    /** Not yet documented */
    private _exchangeServer?: string | undefined;
    /** Not yet documented */
    private _passwordRotationEnabled?: boolean | undefined;
    /** Not yet documented */
    private _sessionInitiationProtocalAddress?: string | undefined;
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
     * Gets the calendarSyncEnabled property value. Not yet documented
     * @returns a boolean
     */
    public get calendarSyncEnabled() {
        return this._calendarSyncEnabled;
    };
    /**
     * Sets the calendarSyncEnabled property value. Not yet documented
     * @param value Value to set for the calendarSyncEnabled property.
     */
    public set calendarSyncEnabled(value: boolean | undefined) {
        if(value) {
            this._calendarSyncEnabled = value;
        }
    };
    /**
     * Instantiates a new updateWindowsDeviceAccountActionParameter and sets the default values.
     * @param updateWindowsDeviceAccountActionParameterParameterValue 
     */
    public constructor(updateWindowsDeviceAccountActionParameterParameterValue?: UpdateWindowsDeviceAccountActionParameter | undefined) {
        this._additionalData = updateWindowsDeviceAccountActionParameterParameterValue?.additionalData ? updateWindowsDeviceAccountActionParameterParameterValue?.additionalData! : {};
        this._calendarSyncEnabled = updateWindowsDeviceAccountActionParameterParameterValue?.calendarSyncEnabled;
        this._deviceAccount = updateWindowsDeviceAccountActionParameterParameterValue?.deviceAccount;
        this._deviceAccountEmail = updateWindowsDeviceAccountActionParameterParameterValue?.deviceAccountEmail;
        this._exchangeServer = updateWindowsDeviceAccountActionParameterParameterValue?.exchangeServer;
        this._passwordRotationEnabled = updateWindowsDeviceAccountActionParameterParameterValue?.passwordRotationEnabled;
        this._sessionInitiationProtocalAddress = updateWindowsDeviceAccountActionParameterParameterValue?.sessionInitiationProtocalAddress;
    };
    /**
     * Gets the deviceAccount property value. Not yet documented
     * @returns a WindowsDeviceAccountInterface
     */
    public get deviceAccount() {
        return this._deviceAccount;
    };
    /**
     * Sets the deviceAccount property value. Not yet documented
     * @param value Value to set for the deviceAccount property.
     */
    public set deviceAccount(value: WindowsDeviceAccount | undefined) {
        if(value) {
            this._deviceAccount = value instanceof WindowsDeviceAccountImpl? value as WindowsDeviceAccountImpl: new WindowsDeviceAccountImpl(value);
        }
    };
    /**
     * Gets the deviceAccountEmail property value. Not yet documented
     * @returns a string
     */
    public get deviceAccountEmail() {
        return this._deviceAccountEmail;
    };
    /**
     * Sets the deviceAccountEmail property value. Not yet documented
     * @param value Value to set for the deviceAccountEmail property.
     */
    public set deviceAccountEmail(value: string | undefined) {
        if(value) {
            this._deviceAccountEmail = value;
        }
    };
    /**
     * Gets the exchangeServer property value. Not yet documented
     * @returns a string
     */
    public get exchangeServer() {
        return this._exchangeServer;
    };
    /**
     * Sets the exchangeServer property value. Not yet documented
     * @param value Value to set for the exchangeServer property.
     */
    public set exchangeServer(value: string | undefined) {
        if(value) {
            this._exchangeServer = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendarSyncEnabled": n => { this.calendarSyncEnabled = n.getBooleanValue(); },
            "deviceAccount": n => { this.deviceAccount = n.getObjectValue<WindowsDeviceAccountImpl>(createWindowsDeviceAccountFromDiscriminatorValue); },
            "deviceAccountEmail": n => { this.deviceAccountEmail = n.getStringValue(); },
            "exchangeServer": n => { this.exchangeServer = n.getStringValue(); },
            "passwordRotationEnabled": n => { this.passwordRotationEnabled = n.getBooleanValue(); },
            "sessionInitiationProtocalAddress": n => { this.sessionInitiationProtocalAddress = n.getStringValue(); },
        };
    };
    /**
     * Gets the passwordRotationEnabled property value. Not yet documented
     * @returns a boolean
     */
    public get passwordRotationEnabled() {
        return this._passwordRotationEnabled;
    };
    /**
     * Sets the passwordRotationEnabled property value. Not yet documented
     * @param value Value to set for the passwordRotationEnabled property.
     */
    public set passwordRotationEnabled(value: boolean | undefined) {
        if(value) {
            this._passwordRotationEnabled = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.calendarSyncEnabled){
            writer.writeBooleanValue("calendarSyncEnabled", this.calendarSyncEnabled);
        }
        if(this.deviceAccount){
            writer.writeObjectValue<WindowsDeviceAccountImpl>("deviceAccount", (this.deviceAccount instanceof WindowsDeviceAccountImpl? this.deviceAccount as WindowsDeviceAccountImpl: new WindowsDeviceAccountImpl(this.deviceAccount)));
        }
        if(this.deviceAccountEmail){
            writer.writeStringValue("deviceAccountEmail", this.deviceAccountEmail);
        }
        if(this.exchangeServer){
            writer.writeStringValue("exchangeServer", this.exchangeServer);
        }
        if(this.passwordRotationEnabled){
            writer.writeBooleanValue("passwordRotationEnabled", this.passwordRotationEnabled);
        }
        if(this.sessionInitiationProtocalAddress){
            writer.writeStringValue("sessionInitiationProtocalAddress", this.sessionInitiationProtocalAddress);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sessionInitiationProtocalAddress property value. Not yet documented
     * @returns a string
     */
    public get sessionInitiationProtocalAddress() {
        return this._sessionInitiationProtocalAddress;
    };
    /**
     * Sets the sessionInitiationProtocalAddress property value. Not yet documented
     * @param value Value to set for the sessionInitiationProtocalAddress property.
     */
    public set sessionInitiationProtocalAddress(value: string | undefined) {
        if(value) {
            this._sessionInitiationProtocalAddress = value;
        }
    };
}
