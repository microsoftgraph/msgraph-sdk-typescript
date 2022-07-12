import {AdminMember1, DeviceConfiguration, SharedPCAccountManagerPolicy} from './index';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class SharedPCConfiguration extends DeviceConfiguration implements Parsable {
    /** Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false. */
    private _accountManagerPolicy?: SharedPCAccountManagerPolicy | AdminMember1 | undefined;
    /** Type of accounts that are allowed to share the PC. */
    private _allowedAccounts?: SharedPCAllowedAccountType | undefined;
    /** Specifies whether local storage is allowed on a shared PC. */
    private _allowLocalStorage?: boolean | undefined;
    /** Disables the account manager for shared PC mode. */
    private _disableAccountManager?: boolean | undefined;
    /** Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true. */
    private _disableEduPolicies?: boolean | undefined;
    /** Specifies whether the default shared PC power policies should be disabled. */
    private _disablePowerPolicies?: boolean | undefined;
    /** Disables the requirement to sign in whenever the device wakes up from sleep mode. */
    private _disableSignInOnResume?: boolean | undefined;
    /** Enables shared PC mode and applies the shared pc policies. */
    private _enabled?: boolean | undefined;
    /** Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring. */
    private _idleTimeBeforeSleepInSeconds?: number | undefined;
    /** Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set. */
    private _kioskAppDisplayName?: string | undefined;
    /** Specifies the application user model ID of the app to use with assigned access. */
    private _kioskAppUserModelId?: string | undefined;
    /** Specifies the daily start time of maintenance hour. */
    private _maintenanceStartTime?: TimeOnly | undefined;
    /**
     * Gets the accountManagerPolicy property value. Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false.
     * @returns a admin
     */
    public get accountManagerPolicy() {
        return this._accountManagerPolicy;
    };
    /**
     * Sets the accountManagerPolicy property value. Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false.
     * @param value Value to set for the accountManagerPolicy property.
     */
    public set accountManagerPolicy(value: SharedPCAccountManagerPolicy | AdminMember1 | undefined) {
        this._accountManagerPolicy = value;
    };
    /**
     * Gets the allowedAccounts property value. Type of accounts that are allowed to share the PC.
     * @returns a sharedPCAllowedAccountType
     */
    public get allowedAccounts() {
        return this._allowedAccounts;
    };
    /**
     * Sets the allowedAccounts property value. Type of accounts that are allowed to share the PC.
     * @param value Value to set for the allowedAccounts property.
     */
    public set allowedAccounts(value: SharedPCAllowedAccountType | undefined) {
        this._allowedAccounts = value;
    };
    /**
     * Gets the allowLocalStorage property value. Specifies whether local storage is allowed on a shared PC.
     * @returns a boolean
     */
    public get allowLocalStorage() {
        return this._allowLocalStorage;
    };
    /**
     * Sets the allowLocalStorage property value. Specifies whether local storage is allowed on a shared PC.
     * @param value Value to set for the allowLocalStorage property.
     */
    public set allowLocalStorage(value: boolean | undefined) {
        this._allowLocalStorage = value;
    };
    /**
     * Instantiates a new SharedPCConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the disableAccountManager property value. Disables the account manager for shared PC mode.
     * @returns a boolean
     */
    public get disableAccountManager() {
        return this._disableAccountManager;
    };
    /**
     * Sets the disableAccountManager property value. Disables the account manager for shared PC mode.
     * @param value Value to set for the disableAccountManager property.
     */
    public set disableAccountManager(value: boolean | undefined) {
        this._disableAccountManager = value;
    };
    /**
     * Gets the disableEduPolicies property value. Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true.
     * @returns a boolean
     */
    public get disableEduPolicies() {
        return this._disableEduPolicies;
    };
    /**
     * Sets the disableEduPolicies property value. Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true.
     * @param value Value to set for the disableEduPolicies property.
     */
    public set disableEduPolicies(value: boolean | undefined) {
        this._disableEduPolicies = value;
    };
    /**
     * Gets the disablePowerPolicies property value. Specifies whether the default shared PC power policies should be disabled.
     * @returns a boolean
     */
    public get disablePowerPolicies() {
        return this._disablePowerPolicies;
    };
    /**
     * Sets the disablePowerPolicies property value. Specifies whether the default shared PC power policies should be disabled.
     * @param value Value to set for the disablePowerPolicies property.
     */
    public set disablePowerPolicies(value: boolean | undefined) {
        this._disablePowerPolicies = value;
    };
    /**
     * Gets the disableSignInOnResume property value. Disables the requirement to sign in whenever the device wakes up from sleep mode.
     * @returns a boolean
     */
    public get disableSignInOnResume() {
        return this._disableSignInOnResume;
    };
    /**
     * Sets the disableSignInOnResume property value. Disables the requirement to sign in whenever the device wakes up from sleep mode.
     * @param value Value to set for the disableSignInOnResume property.
     */
    public set disableSignInOnResume(value: boolean | undefined) {
        this._disableSignInOnResume = value;
    };
    /**
     * Gets the enabled property value. Enables shared PC mode and applies the shared pc policies.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Enables shared PC mode and applies the shared pc policies.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountManagerPolicy": n => { this.accountManagerPolicy = n.getObjectValue<SharedPCAccountManagerPolicy>(createSharedPCAccountManagerPolicyFromDiscriminatorValue); },
            "allowedAccounts": n => { this.allowedAccounts = n.getEnumValue<SharedPCAllowedAccountType>(SharedPCAllowedAccountType); },
            "allowLocalStorage": n => { this.allowLocalStorage = n.getBooleanValue(); },
            "disableAccountManager": n => { this.disableAccountManager = n.getBooleanValue(); },
            "disableEduPolicies": n => { this.disableEduPolicies = n.getBooleanValue(); },
            "disablePowerPolicies": n => { this.disablePowerPolicies = n.getBooleanValue(); },
            "disableSignInOnResume": n => { this.disableSignInOnResume = n.getBooleanValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "idleTimeBeforeSleepInSeconds": n => { this.idleTimeBeforeSleepInSeconds = n.getNumberValue(); },
            "kioskAppDisplayName": n => { this.kioskAppDisplayName = n.getStringValue(); },
            "kioskAppUserModelId": n => { this.kioskAppUserModelId = n.getStringValue(); },
            "maintenanceStartTime": n => { this.maintenanceStartTime = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Gets the idleTimeBeforeSleepInSeconds property value. Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring.
     * @returns a integer
     */
    public get idleTimeBeforeSleepInSeconds() {
        return this._idleTimeBeforeSleepInSeconds;
    };
    /**
     * Sets the idleTimeBeforeSleepInSeconds property value. Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring.
     * @param value Value to set for the idleTimeBeforeSleepInSeconds property.
     */
    public set idleTimeBeforeSleepInSeconds(value: number | undefined) {
        this._idleTimeBeforeSleepInSeconds = value;
    };
    /**
     * Gets the kioskAppDisplayName property value. Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set.
     * @returns a string
     */
    public get kioskAppDisplayName() {
        return this._kioskAppDisplayName;
    };
    /**
     * Sets the kioskAppDisplayName property value. Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set.
     * @param value Value to set for the kioskAppDisplayName property.
     */
    public set kioskAppDisplayName(value: string | undefined) {
        this._kioskAppDisplayName = value;
    };
    /**
     * Gets the kioskAppUserModelId property value. Specifies the application user model ID of the app to use with assigned access.
     * @returns a string
     */
    public get kioskAppUserModelId() {
        return this._kioskAppUserModelId;
    };
    /**
     * Sets the kioskAppUserModelId property value. Specifies the application user model ID of the app to use with assigned access.
     * @param value Value to set for the kioskAppUserModelId property.
     */
    public set kioskAppUserModelId(value: string | undefined) {
        this._kioskAppUserModelId = value;
    };
    /**
     * Gets the maintenanceStartTime property value. Specifies the daily start time of maintenance hour.
     * @returns a TimeOnly
     */
    public get maintenanceStartTime() {
        return this._maintenanceStartTime;
    };
    /**
     * Sets the maintenanceStartTime property value. Specifies the daily start time of maintenance hour.
     * @param value Value to set for the maintenanceStartTime property.
     */
    public set maintenanceStartTime(value: TimeOnly | undefined) {
        this._maintenanceStartTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<SharedPCAccountManagerPolicy>("accountManagerPolicy", this.accountManagerPolicy);
        writer.writeEnumValue<SharedPCAllowedAccountType>("allowedAccounts", this.allowedAccounts);
        writer.writeBooleanValue("allowLocalStorage", this.allowLocalStorage);
        writer.writeBooleanValue("disableAccountManager", this.disableAccountManager);
        writer.writeBooleanValue("disableEduPolicies", this.disableEduPolicies);
        writer.writeBooleanValue("disablePowerPolicies", this.disablePowerPolicies);
        writer.writeBooleanValue("disableSignInOnResume", this.disableSignInOnResume);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeNumberValue("idleTimeBeforeSleepInSeconds", this.idleTimeBeforeSleepInSeconds);
        writer.writeStringValue("kioskAppDisplayName", this.kioskAppDisplayName);
        writer.writeStringValue("kioskAppUserModelId", this.kioskAppUserModelId);
        writer.writeTimeOnlyValue("maintenanceStartTime", this.maintenanceStartTime);
    };
}
