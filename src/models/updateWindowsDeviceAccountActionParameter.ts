import {createWindowsDeviceAccountFromDiscriminatorValue} from './createWindowsDeviceAccountFromDiscriminatorValue';
import {WindowsDeviceAccount} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateWindowsDeviceAccountActionParameter implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Not yet documented */
    private _calendarSyncEnabled?: boolean | undefined;
    /** Not yet documented */
    private _deviceAccount?: WindowsDeviceAccount | undefined;
    /** Not yet documented */
    private _deviceAccountEmail?: string | undefined;
    /** Not yet documented */
    private _exchangeServer?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
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
        this._calendarSyncEnabled = value;
    };
    /**
     * Instantiates a new updateWindowsDeviceAccountActionParameter and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.updateWindowsDeviceAccountActionParameter";
    };
    /**
     * Gets the deviceAccount property value. Not yet documented
     * @returns a windowsDeviceAccount
     */
    public get deviceAccount() {
        return this._deviceAccount;
    };
    /**
     * Sets the deviceAccount property value. Not yet documented
     * @param value Value to set for the deviceAccount property.
     */
    public set deviceAccount(value: WindowsDeviceAccount | undefined) {
        this._deviceAccount = value;
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
        this._deviceAccountEmail = value;
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
        this._exchangeServer = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "calendarSyncEnabled": n => { this.calendarSyncEnabled = n.getBooleanValue(); },
            "deviceAccount": n => { this.deviceAccount = n.getObjectValue<WindowsDeviceAccount>(createWindowsDeviceAccountFromDiscriminatorValue); },
            "deviceAccountEmail": n => { this.deviceAccountEmail = n.getStringValue(); },
            "exchangeServer": n => { this.exchangeServer = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "passwordRotationEnabled": n => { this.passwordRotationEnabled = n.getBooleanValue(); },
            "sessionInitiationProtocalAddress": n => { this.sessionInitiationProtocalAddress = n.getStringValue(); },
        };
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
        this._passwordRotationEnabled = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("calendarSyncEnabled", this.calendarSyncEnabled);
        writer.writeObjectValue<WindowsDeviceAccount>("deviceAccount", this.deviceAccount);
        writer.writeStringValue("deviceAccountEmail", this.deviceAccountEmail);
        writer.writeStringValue("exchangeServer", this.exchangeServer);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("passwordRotationEnabled", this.passwordRotationEnabled);
        writer.writeStringValue("sessionInitiationProtocalAddress", this.sessionInitiationProtocalAddress);
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
        this._sessionInitiationProtocalAddress = value;
    };
}
