import {createSharedPCAccountManagerPolicyFromDiscriminatorValue} from './createSharedPCAccountManagerPolicyFromDiscriminatorValue';
import {DeviceConfigurationImpl, SharedPCAccountManagerPolicyImpl} from './index';
import {SharedPCAccountManagerPolicy} from './sharedPCAccountManagerPolicy';
import {SharedPCAllowedAccountType} from './sharedPCAllowedAccountType';
import {SharedPCConfiguration} from './sharedPCConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class SharedPCConfigurationImpl extends DeviceConfigurationImpl implements SharedPCConfiguration {
    /** Specifies how accounts are managed on a shared PC. Only applies when disableAccountManager is false. */
    public accountManagerPolicy?: SharedPCAccountManagerPolicy | undefined;
    /** Indicates which type of accounts are allowed to use on a shared PC. Possible values are: notConfigured, guest, domain. */
    public allowedAccounts?: SharedPCAllowedAccountType | undefined;
    /** Specifies whether local storage is allowed on a shared PC. */
    public allowLocalStorage?: boolean | undefined;
    /** Disables the account manager for shared PC mode. */
    public disableAccountManager?: boolean | undefined;
    /** Specifies whether the default shared PC education environment policies should be disabled. For Windows 10 RS2 and later, this policy will be applied without setting Enabled to true. */
    public disableEduPolicies?: boolean | undefined;
    /** Specifies whether the default shared PC power policies should be disabled. */
    public disablePowerPolicies?: boolean | undefined;
    /** Disables the requirement to sign in whenever the device wakes up from sleep mode. */
    public disableSignInOnResume?: boolean | undefined;
    /** Enables shared PC mode and applies the shared pc policies. */
    public enabled?: boolean | undefined;
    /** Specifies the time in seconds that a device must sit idle before the PC goes to sleep. Setting this value to 0 prevents the sleep timeout from occurring. */
    public idleTimeBeforeSleepInSeconds?: number | undefined;
    /** Specifies the display text for the account shown on the sign-in screen which launches the app specified by SetKioskAppUserModelId. Only applies when KioskAppUserModelId is set. */
    public kioskAppDisplayName?: string | undefined;
    /** Specifies the application user model ID of the app to use with assigned access. */
    public kioskAppUserModelId?: string | undefined;
    /** Specifies the daily start time of maintenance hour. */
    public maintenanceStartTime?: TimeOnly | undefined;
    /**
     * Instantiates a new SharedPCConfiguration and sets the default values.
     * @param sharedPCConfigurationParameterValue 
     */
    public constructor(sharedPCConfigurationParameterValue?: SharedPCConfiguration | undefined) {
        super(sharedPCConfigurationParameterValue);
        this.accountManagerPolicy = sharedPCConfigurationParameterValue?.accountManagerPolicy;
        this.allowedAccounts = sharedPCConfigurationParameterValue?.allowedAccounts;
        this.allowLocalStorage = sharedPCConfigurationParameterValue?.allowLocalStorage;
        this.disableAccountManager = sharedPCConfigurationParameterValue?.disableAccountManager;
        this.disableEduPolicies = sharedPCConfigurationParameterValue?.disableEduPolicies;
        this.disablePowerPolicies = sharedPCConfigurationParameterValue?.disablePowerPolicies;
        this.disableSignInOnResume = sharedPCConfigurationParameterValue?.disableSignInOnResume;
        this.enabled = sharedPCConfigurationParameterValue?.enabled;
        this.idleTimeBeforeSleepInSeconds = sharedPCConfigurationParameterValue?.idleTimeBeforeSleepInSeconds;
        this.kioskAppDisplayName = sharedPCConfigurationParameterValue?.kioskAppDisplayName;
        this.kioskAppUserModelId = sharedPCConfigurationParameterValue?.kioskAppUserModelId;
        this.maintenanceStartTime = sharedPCConfigurationParameterValue?.maintenanceStartTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accountManagerPolicy": n => { this.accountManagerPolicy = n.getObjectValue<SharedPCAccountManagerPolicyImpl>(createSharedPCAccountManagerPolicyFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accountManagerPolicy){
            writer.writeObjectValue<SharedPCAccountManagerPolicyImpl>("accountManagerPolicy", new SharedPCAccountManagerPolicyImpl(this.accountManagerPolicy));
        }
        if(this.allowedAccounts){
            writer.writeEnumValue<SharedPCAllowedAccountType>("allowedAccounts", this.allowedAccounts);
        }
        if(this.allowLocalStorage){
            writer.writeBooleanValue("allowLocalStorage", this.allowLocalStorage);
        }
        if(this.disableAccountManager){
            writer.writeBooleanValue("disableAccountManager", this.disableAccountManager);
        }
        if(this.disableEduPolicies){
            writer.writeBooleanValue("disableEduPolicies", this.disableEduPolicies);
        }
        if(this.disablePowerPolicies){
            writer.writeBooleanValue("disablePowerPolicies", this.disablePowerPolicies);
        }
        if(this.disableSignInOnResume){
            writer.writeBooleanValue("disableSignInOnResume", this.disableSignInOnResume);
        }
        if(this.enabled){
            writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.idleTimeBeforeSleepInSeconds){
            writer.writeNumberValue("idleTimeBeforeSleepInSeconds", this.idleTimeBeforeSleepInSeconds);
        }
        if(this.kioskAppDisplayName){
            writer.writeStringValue("kioskAppDisplayName", this.kioskAppDisplayName);
        }
        if(this.kioskAppUserModelId){
            writer.writeStringValue("kioskAppUserModelId", this.kioskAppUserModelId);
        }
        if(this.maintenanceStartTime){
            writer.writeTimeOnlyValue("maintenanceStartTime", this.maintenanceStartTime);
        }
    };
}
