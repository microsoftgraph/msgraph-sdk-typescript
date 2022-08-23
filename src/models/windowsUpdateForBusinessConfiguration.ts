import {AutomaticUpdateMode} from './automaticUpdateMode';
import {createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue} from './createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue';
import {DeviceConfiguration, WindowsUpdateInstallScheduleType} from './index';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateType} from './windowsUpdateType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUpdateForBusinessConfiguration extends DeviceConfiguration implements Parsable {
    /** Possible values for automatic update mode. */
    private _automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /** Which branch devices will receive their updates from */
    private _businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /** Delivery optimization mode for peer distribution */
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
    /** Possible values for pre-release features. */
    private _prereleaseFeatures?: PrereleaseFeatures | undefined;
    /** Defer Quality Updates by these many days */
    private _qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Quality Updates */
    private _qualityUpdatesPaused?: boolean | undefined;
    /** Quality Updates Pause Expiry datetime */
    private _qualityUpdatesPauseExpiryDateTime?: Date | undefined;
    /**
     * Gets the automaticUpdateMode property value. Possible values for automatic update mode.
     * @returns a automaticUpdateMode
     */
    public get automaticUpdateMode() {
        return this._automaticUpdateMode;
    };
    /**
     * Sets the automaticUpdateMode property value. Possible values for automatic update mode.
     * @param value Value to set for the automaticUpdateMode property.
     */
    public set automaticUpdateMode(value: AutomaticUpdateMode | undefined) {
        this._automaticUpdateMode = value;
    };
    /**
     * Gets the businessReadyUpdatesOnly property value. Which branch devices will receive their updates from
     * @returns a windowsUpdateType
     */
    public get businessReadyUpdatesOnly() {
        return this._businessReadyUpdatesOnly;
    };
    /**
     * Sets the businessReadyUpdatesOnly property value. Which branch devices will receive their updates from
     * @param value Value to set for the businessReadyUpdatesOnly property.
     */
    public set businessReadyUpdatesOnly(value: WindowsUpdateType | undefined) {
        this._businessReadyUpdatesOnly = value;
    };
    /**
     * Instantiates a new WindowsUpdateForBusinessConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.windowsUpdateForBusinessConfiguration";
    };
    /**
     * Gets the deliveryOptimizationMode property value. Delivery optimization mode for peer distribution
     * @returns a windowsDeliveryOptimizationMode
     */
    public get deliveryOptimizationMode() {
        return this._deliveryOptimizationMode;
    };
    /**
     * Sets the deliveryOptimizationMode property value. Delivery optimization mode for peer distribution
     * @param value Value to set for the deliveryOptimizationMode property.
     */
    public set deliveryOptimizationMode(value: WindowsDeliveryOptimizationMode | undefined) {
        this._deliveryOptimizationMode = value;
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
        this._driversExcluded = value;
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
        this._featureUpdatesDeferralPeriodInDays = value;
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
        this._featureUpdatesPaused = value;
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
        this._featureUpdatesPauseExpiryDateTime = value;
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
            "installationSchedule": n => { this.installationSchedule = n.getObjectValue<WindowsUpdateInstallScheduleType>(createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue); },
            "microsoftUpdateServiceAllowed": n => { this.microsoftUpdateServiceAllowed = n.getBooleanValue(); },
            "prereleaseFeatures": n => { this.prereleaseFeatures = n.getEnumValue<PrereleaseFeatures>(PrereleaseFeatures); },
            "qualityUpdatesDeferralPeriodInDays": n => { this.qualityUpdatesDeferralPeriodInDays = n.getNumberValue(); },
            "qualityUpdatesPaused": n => { this.qualityUpdatesPaused = n.getBooleanValue(); },
            "qualityUpdatesPauseExpiryDateTime": n => { this.qualityUpdatesPauseExpiryDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the installationSchedule property value. Installation schedule
     * @returns a windowsUpdateInstallScheduleType
     */
    public get installationSchedule() {
        return this._installationSchedule;
    };
    /**
     * Sets the installationSchedule property value. Installation schedule
     * @param value Value to set for the installationSchedule property.
     */
    public set installationSchedule(value: WindowsUpdateInstallScheduleType | undefined) {
        this._installationSchedule = value;
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
        this._microsoftUpdateServiceAllowed = value;
    };
    /**
     * Gets the prereleaseFeatures property value. Possible values for pre-release features.
     * @returns a prereleaseFeatures
     */
    public get prereleaseFeatures() {
        return this._prereleaseFeatures;
    };
    /**
     * Sets the prereleaseFeatures property value. Possible values for pre-release features.
     * @param value Value to set for the prereleaseFeatures property.
     */
    public set prereleaseFeatures(value: PrereleaseFeatures | undefined) {
        this._prereleaseFeatures = value;
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
        this._qualityUpdatesDeferralPeriodInDays = value;
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
        this._qualityUpdatesPaused = value;
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
        this._qualityUpdatesPauseExpiryDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AutomaticUpdateMode>("automaticUpdateMode", this.automaticUpdateMode);
        writer.writeEnumValue<WindowsUpdateType>("businessReadyUpdatesOnly", this.businessReadyUpdatesOnly);
        writer.writeEnumValue<WindowsDeliveryOptimizationMode>("deliveryOptimizationMode", this.deliveryOptimizationMode);
        writer.writeBooleanValue("driversExcluded", this.driversExcluded);
        writer.writeNumberValue("featureUpdatesDeferralPeriodInDays", this.featureUpdatesDeferralPeriodInDays);
        writer.writeBooleanValue("featureUpdatesPaused", this.featureUpdatesPaused);
        writer.writeDateValue("featureUpdatesPauseExpiryDateTime", this.featureUpdatesPauseExpiryDateTime);
        writer.writeObjectValue<WindowsUpdateInstallScheduleType>("installationSchedule", this.installationSchedule);
        writer.writeBooleanValue("microsoftUpdateServiceAllowed", this.microsoftUpdateServiceAllowed);
        writer.writeEnumValue<PrereleaseFeatures>("prereleaseFeatures", this.prereleaseFeatures);
        writer.writeNumberValue("qualityUpdatesDeferralPeriodInDays", this.qualityUpdatesDeferralPeriodInDays);
        writer.writeBooleanValue("qualityUpdatesPaused", this.qualityUpdatesPaused);
        writer.writeDateValue("qualityUpdatesPauseExpiryDateTime", this.qualityUpdatesPauseExpiryDateTime);
    };
}
