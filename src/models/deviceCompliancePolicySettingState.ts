import {ComplianceStatus} from './complianceStatus';
import {createSettingSourceFromDiscriminatorValue} from './createSettingSourceFromDiscriminatorValue';
import {SettingSource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compilance Policy Setting State for a given device. */
export class DeviceCompliancePolicySettingState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Current value of setting on device */
    private _currentValue?: string | undefined;
    /** Error code for the setting */
    private _errorCode?: number | undefined;
    /** Error description */
    private _errorDescription?: string | undefined;
    /** Name of setting instance that is being reported. */
    private _instanceDisplayName?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The setting that is being reported */
    private _setting?: string | undefined;
    /** Localized/user friendly setting name that is being reported */
    private _settingName?: string | undefined;
    /** Contributing policies */
    private _sources?: SettingSource[] | undefined;
    /** The state property */
    private _state?: ComplianceStatus | undefined;
    /** UserEmail */
    private _userEmail?: string | undefined;
    /** UserId */
    private _userId?: string | undefined;
    /** UserName */
    private _userName?: string | undefined;
    /** UserPrincipalName. */
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
     * Instantiates a new deviceCompliancePolicySettingState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.deviceCompliancePolicySettingState";
    };
    /**
     * Gets the currentValue property value. Current value of setting on device
     * @returns a string
     */
    public get currentValue() {
        return this._currentValue;
    };
    /**
     * Sets the currentValue property value. Current value of setting on device
     * @param value Value to set for the currentValue property.
     */
    public set currentValue(value: string | undefined) {
        this._currentValue = value;
    };
    /**
     * Gets the errorCode property value. Error code for the setting
     * @returns a int64
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. Error code for the setting
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * Gets the errorDescription property value. Error description
     * @returns a string
     */
    public get errorDescription() {
        return this._errorDescription;
    };
    /**
     * Sets the errorDescription property value. Error description
     * @param value Value to set for the errorDescription property.
     */
    public set errorDescription(value: string | undefined) {
        this._errorDescription = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "currentValue": n => { this.currentValue = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "errorDescription": n => { this.errorDescription = n.getStringValue(); },
            "instanceDisplayName": n => { this.instanceDisplayName = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "setting": n => { this.setting = n.getStringValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "sources": n => { this.sources = n.getCollectionOfObjectValues<SettingSource>(createSettingSourceFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "userEmail": n => { this.userEmail = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the instanceDisplayName property value. Name of setting instance that is being reported.
     * @returns a string
     */
    public get instanceDisplayName() {
        return this._instanceDisplayName;
    };
    /**
     * Sets the instanceDisplayName property value. Name of setting instance that is being reported.
     * @param value Value to set for the instanceDisplayName property.
     */
    public set instanceDisplayName(value: string | undefined) {
        this._instanceDisplayName = value;
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
        writer.writeStringValue("currentValue", this.currentValue);
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeStringValue("errorDescription", this.errorDescription);
        writer.writeStringValue("instanceDisplayName", this.instanceDisplayName);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("setting", this.setting);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeCollectionOfObjectValues<SettingSource>("sources", this.sources);
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the setting property value. The setting that is being reported
     * @returns a string
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The setting that is being reported
     * @param value Value to set for the setting property.
     */
    public set setting(value: string | undefined) {
        this._setting = value;
    };
    /**
     * Gets the settingName property value. Localized/user friendly setting name that is being reported
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. Localized/user friendly setting name that is being reported
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        this._settingName = value;
    };
    /**
     * Gets the sources property value. Contributing policies
     * @returns a settingSource
     */
    public get sources() {
        return this._sources;
    };
    /**
     * Sets the sources property value. Contributing policies
     * @param value Value to set for the sources property.
     */
    public set sources(value: SettingSource[] | undefined) {
        this._sources = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        this._state = value;
    };
    /**
     * Gets the userEmail property value. UserEmail
     * @returns a string
     */
    public get userEmail() {
        return this._userEmail;
    };
    /**
     * Sets the userEmail property value. UserEmail
     * @param value Value to set for the userEmail property.
     */
    public set userEmail(value: string | undefined) {
        this._userEmail = value;
    };
    /**
     * Gets the userId property value. UserId
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. UserId
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userName property value. UserName
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. UserName
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
    /**
     * Gets the userPrincipalName property value. UserPrincipalName.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. UserPrincipalName.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
