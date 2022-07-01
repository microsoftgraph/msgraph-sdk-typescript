import {AutomaticUpdateMode} from './automaticUpdateMode';
import {createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue} from './createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue';
import {DeviceConfigurationImpl, WindowsUpdateInstallScheduleTypeImpl} from './index';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessConfiguration} from './windowsUpdateForBusinessConfiguration';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {WindowsUpdateType} from './windowsUpdateType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUpdateForBusinessConfigurationImpl extends DeviceConfigurationImpl implements WindowsUpdateForBusinessConfiguration {
    /** Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime, autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl, windowsDefault. */
    private _automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /** Determines which branch devices will receive their updates from. Possible values are: userDefined, all, businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease. */
    private _businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /** Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat, httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode. */
    private _deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    /** Exclude Windows update Drivers */
    private _driversExcluded?: boolean | undefined;
    /** Defer Feature Updates by these many days */
    private _featureUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Feature Updates */
    private _featureUpdatesPaused?: boolean | undefined;
    /** Feature Updates Pause Expiry datetime */
    private _featureUpdatesPauseExpiryDateTime?: Date | undefined;
    /** Installation schedule */
    private _installationSchedule?: WindowsUpdateInstallScheduleType | undefined;
    /** Allow Microsoft Update Service */
    private _microsoftUpdateServiceAllowed?: boolean | undefined;
    /** The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed. */
    private _prereleaseFeatures?: PrereleaseFeatures | undefined;
    /** Defer Quality Updates by these many days */
    private _qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Quality Updates */
    private _qualityUpdatesPaused?: boolean | undefined;
    /** Quality Updates Pause Expiry datetime */
    private _qualityUpdatesPauseExpiryDateTime?: Date | undefined;
    /**
     * Gets the automaticUpdateMode property value. Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime, autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl, windowsDefault.
     * @returns a automaticUpdateMode
     */
    public get automaticUpdateMode() {
        return this._automaticUpdateMode;
    };
    /**
     * Sets the automaticUpdateMode property value. Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime, autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl, windowsDefault.
     * @param value Value to set for the automaticUpdateMode property.
     */
    public set automaticUpdateMode(value: AutomaticUpdateMode | undefined) {
        if(value) {
            this._automaticUpdateMode = value;
        }
    };
    /**
     * Gets the businessReadyUpdatesOnly property value. Determines which branch devices will receive their updates from. Possible values are: userDefined, all, businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease.
     * @returns a windowsUpdateType
     */
    public get businessReadyUpdatesOnly() {
        return this._businessReadyUpdatesOnly;
    };
    /**
     * Sets the businessReadyUpdatesOnly property value. Determines which branch devices will receive their updates from. Possible values are: userDefined, all, businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease.
     * @param value Value to set for the businessReadyUpdatesOnly property.
     */
    public set businessReadyUpdatesOnly(value: WindowsUpdateType | undefined) {
        if(value) {
            this._businessReadyUpdatesOnly = value;
        }
    };
    /**
     * Instantiates a new WindowsUpdateForBusinessConfiguration and sets the default values.
     * @param windowsUpdateForBusinessConfigurationParameterValue 
     */
    public constructor(windowsUpdateForBusinessConfigurationParameterValue?: WindowsUpdateForBusinessConfiguration | undefined) {
        super(windowsUpdateForBusinessConfigurationParameterValue);
        this._automaticUpdateMode = windowsUpdateForBusinessConfigurationParameterValue?.automaticUpdateMode;
        this._businessReadyUpdatesOnly = windowsUpdateForBusinessConfigurationParameterValue?.businessReadyUpdatesOnly;
        this._deliveryOptimizationMode = windowsUpdateForBusinessConfigurationParameterValue?.deliveryOptimizationMode;
        this._driversExcluded = windowsUpdateForBusinessConfigurationParameterValue?.driversExcluded;
        this._featureUpdatesDeferralPeriodInDays = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesDeferralPeriodInDays;
        this._featureUpdatesPaused = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesPaused;
        this._featureUpdatesPauseExpiryDateTime = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesPauseExpiryDateTime;
        this._installationSchedule = windowsUpdateForBusinessConfigurationParameterValue?.installationSchedule;
        this._microsoftUpdateServiceAllowed = windowsUpdateForBusinessConfigurationParameterValue?.microsoftUpdateServiceAllowed;
        this._prereleaseFeatures = windowsUpdateForBusinessConfigurationParameterValue?.prereleaseFeatures;
        this._qualityUpdatesDeferralPeriodInDays = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesDeferralPeriodInDays;
        this._qualityUpdatesPaused = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesPaused;
        this._qualityUpdatesPauseExpiryDateTime = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesPauseExpiryDateTime;
    };
    /**
     * Gets the deliveryOptimizationMode property value. Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat, httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode.
     * @returns a windowsDeliveryOptimizationMode
     */
    public get deliveryOptimizationMode() {
        return this._deliveryOptimizationMode;
    };
    /**
     * Sets the deliveryOptimizationMode property value. Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat, httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode.
     * @param value Value to set for the deliveryOptimizationMode property.
     */
    public set deliveryOptimizationMode(value: WindowsDeliveryOptimizationMode | undefined) {
        if(value) {
            this._deliveryOptimizationMode = value;
        }
    };
    /**
     * Gets the driversExcluded property value. Exclude Windows update Drivers
     * @returns a boolean
     */
    public get driversExcluded() {
        return this._driversExcluded;
    };
    /**
     * Sets the driversExcluded property value. Exclude Windows update Drivers
     * @param value Value to set for the driversExcluded property.
     */
    public set driversExcluded(value: boolean | undefined) {
        if(value) {
            this._driversExcluded = value;
        }
    };
    /**
     * Gets the featureUpdatesDeferralPeriodInDays property value. Defer Feature Updates by these many days
     * @returns a integer
     */
    public get featureUpdatesDeferralPeriodInDays() {
        return this._featureUpdatesDeferralPeriodInDays;
    };
    /**
     * Sets the featureUpdatesDeferralPeriodInDays property value. Defer Feature Updates by these many days
     * @param value Value to set for the featureUpdatesDeferralPeriodInDays property.
     */
    public set featureUpdatesDeferralPeriodInDays(value: number | undefined) {
        if(value) {
            this._featureUpdatesDeferralPeriodInDays = value;
        }
    };
    /**
     * Gets the featureUpdatesPaused property value. Pause Feature Updates
     * @returns a boolean
     */
    public get featureUpdatesPaused() {
        return this._featureUpdatesPaused;
    };
    /**
     * Sets the featureUpdatesPaused property value. Pause Feature Updates
     * @param value Value to set for the featureUpdatesPaused property.
     */
    public set featureUpdatesPaused(value: boolean | undefined) {
        if(value) {
            this._featureUpdatesPaused = value;
        }
    };
    /**
     * Gets the featureUpdatesPauseExpiryDateTime property value. Feature Updates Pause Expiry datetime
     * @returns a Date
     */
    public get featureUpdatesPauseExpiryDateTime() {
        return this._featureUpdatesPauseExpiryDateTime;
    };
    /**
     * Sets the featureUpdatesPauseExpiryDateTime property value. Feature Updates Pause Expiry datetime
     * @param value Value to set for the featureUpdatesPauseExpiryDateTime property.
     */
    public set featureUpdatesPauseExpiryDateTime(value: Date | undefined) {
        if(value) {
            this._featureUpdatesPauseExpiryDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "automaticUpdateMode": n => { this.automaticUpdateMode = n.getEnumValue<AutomaticUpdateMode>(AutomaticUpdateMode); },
            "businessReadyUpdatesOnly": n => { this.businessReadyUpdatesOnly = n.getEnumValue<WindowsUpdateType>(WindowsUpdateType); },
            "deliveryOptimizationMode": n => { this.deliveryOptimizationMode = n.getEnumValue<WindowsDeliveryOptimizationMode>(WindowsDeliveryOptimizationMode); },
            "driversExcluded": n => { this.driversExcluded = n.getBooleanValue(); },
            "featureUpdatesDeferralPeriodInDays": n => { this.featureUpdatesDeferralPeriodInDays = n.getNumberValue(); },
            "featureUpdatesPaused": n => { this.featureUpdatesPaused = n.getBooleanValue(); },
            "featureUpdatesPauseExpiryDateTime": n => { this.featureUpdatesPauseExpiryDateTime = n.getDateValue(); },
            "installationSchedule": n => { this.installationSchedule = n.getObjectValue<WindowsUpdateInstallScheduleTypeImpl>(createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue); },
            "microsoftUpdateServiceAllowed": n => { this.microsoftUpdateServiceAllowed = n.getBooleanValue(); },
            "prereleaseFeatures": n => { this.prereleaseFeatures = n.getEnumValue<PrereleaseFeatures>(PrereleaseFeatures); },
            "qualityUpdatesDeferralPeriodInDays": n => { this.qualityUpdatesDeferralPeriodInDays = n.getNumberValue(); },
            "qualityUpdatesPaused": n => { this.qualityUpdatesPaused = n.getBooleanValue(); },
            "qualityUpdatesPauseExpiryDateTime": n => { this.qualityUpdatesPauseExpiryDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the installationSchedule property value. Installation schedule
     * @returns a WindowsUpdateInstallScheduleTypeInterface
     */
    public get installationSchedule() {
        return this._installationSchedule;
    };
    /**
     * Sets the installationSchedule property value. Installation schedule
     * @param value Value to set for the installationSchedule property.
     */
    public set installationSchedule(value: WindowsUpdateInstallScheduleType | undefined) {
        if(value) {
            this._installationSchedule = value instanceof WindowsUpdateInstallScheduleTypeImpl? value as WindowsUpdateInstallScheduleTypeImpl: new WindowsUpdateInstallScheduleTypeImpl(value);
        }
    };
    /**
     * Gets the microsoftUpdateServiceAllowed property value. Allow Microsoft Update Service
     * @returns a boolean
     */
    public get microsoftUpdateServiceAllowed() {
        return this._microsoftUpdateServiceAllowed;
    };
    /**
     * Sets the microsoftUpdateServiceAllowed property value. Allow Microsoft Update Service
     * @param value Value to set for the microsoftUpdateServiceAllowed property.
     */
    public set microsoftUpdateServiceAllowed(value: boolean | undefined) {
        if(value) {
            this._microsoftUpdateServiceAllowed = value;
        }
    };
    /**
     * Gets the prereleaseFeatures property value. The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed.
     * @returns a prereleaseFeatures
     */
    public get prereleaseFeatures() {
        return this._prereleaseFeatures;
    };
    /**
     * Sets the prereleaseFeatures property value. The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed.
     * @param value Value to set for the prereleaseFeatures property.
     */
    public set prereleaseFeatures(value: PrereleaseFeatures | undefined) {
        if(value) {
            this._prereleaseFeatures = value;
        }
    };
    /**
     * Gets the qualityUpdatesDeferralPeriodInDays property value. Defer Quality Updates by these many days
     * @returns a integer
     */
    public get qualityUpdatesDeferralPeriodInDays() {
        return this._qualityUpdatesDeferralPeriodInDays;
    };
    /**
     * Sets the qualityUpdatesDeferralPeriodInDays property value. Defer Quality Updates by these many days
     * @param value Value to set for the qualityUpdatesDeferralPeriodInDays property.
     */
    public set qualityUpdatesDeferralPeriodInDays(value: number | undefined) {
        if(value) {
            this._qualityUpdatesDeferralPeriodInDays = value;
        }
    };
    /**
     * Gets the qualityUpdatesPaused property value. Pause Quality Updates
     * @returns a boolean
     */
    public get qualityUpdatesPaused() {
        return this._qualityUpdatesPaused;
    };
    /**
     * Sets the qualityUpdatesPaused property value. Pause Quality Updates
     * @param value Value to set for the qualityUpdatesPaused property.
     */
    public set qualityUpdatesPaused(value: boolean | undefined) {
        if(value) {
            this._qualityUpdatesPaused = value;
        }
    };
    /**
     * Gets the qualityUpdatesPauseExpiryDateTime property value. Quality Updates Pause Expiry datetime
     * @returns a Date
     */
    public get qualityUpdatesPauseExpiryDateTime() {
        return this._qualityUpdatesPauseExpiryDateTime;
    };
    /**
     * Sets the qualityUpdatesPauseExpiryDateTime property value. Quality Updates Pause Expiry datetime
     * @param value Value to set for the qualityUpdatesPauseExpiryDateTime property.
     */
    public set qualityUpdatesPauseExpiryDateTime(value: Date | undefined) {
        if(value) {
            this._qualityUpdatesPauseExpiryDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.automaticUpdateMode){
            writer.writeEnumValue<AutomaticUpdateMode>("automaticUpdateMode", this.automaticUpdateMode);
        }
        if(this.businessReadyUpdatesOnly){
            writer.writeEnumValue<WindowsUpdateType>("businessReadyUpdatesOnly", this.businessReadyUpdatesOnly);
        }
        if(this.deliveryOptimizationMode){
            writer.writeEnumValue<WindowsDeliveryOptimizationMode>("deliveryOptimizationMode", this.deliveryOptimizationMode);
        }
        if(this.driversExcluded){
            writer.writeBooleanValue("driversExcluded", this.driversExcluded);
        }
        if(this.featureUpdatesDeferralPeriodInDays){
            writer.writeNumberValue("featureUpdatesDeferralPeriodInDays", this.featureUpdatesDeferralPeriodInDays);
        }
        if(this.featureUpdatesPaused){
            writer.writeBooleanValue("featureUpdatesPaused", this.featureUpdatesPaused);
        }
        if(this.featureUpdatesPauseExpiryDateTime){
            writer.writeDateValue("featureUpdatesPauseExpiryDateTime", this.featureUpdatesPauseExpiryDateTime);
        }
        if(this.installationSchedule){
            writer.writeObjectValue<WindowsUpdateInstallScheduleTypeImpl>("installationSchedule", (this.installationSchedule instanceof WindowsUpdateInstallScheduleTypeImpl? this.installationSchedule as WindowsUpdateInstallScheduleTypeImpl: new WindowsUpdateInstallScheduleTypeImpl(this.installationSchedule)));
        }
        if(this.microsoftUpdateServiceAllowed){
            writer.writeBooleanValue("microsoftUpdateServiceAllowed", this.microsoftUpdateServiceAllowed);
        }
        if(this.prereleaseFeatures){
            writer.writeEnumValue<PrereleaseFeatures>("prereleaseFeatures", this.prereleaseFeatures);
        }
        if(this.qualityUpdatesDeferralPeriodInDays){
            writer.writeNumberValue("qualityUpdatesDeferralPeriodInDays", this.qualityUpdatesDeferralPeriodInDays);
        }
        if(this.qualityUpdatesPaused){
            writer.writeBooleanValue("qualityUpdatesPaused", this.qualityUpdatesPaused);
        }
        if(this.qualityUpdatesPauseExpiryDateTime){
            writer.writeDateValue("qualityUpdatesPauseExpiryDateTime", this.qualityUpdatesPauseExpiryDateTime);
        }
    };
}
