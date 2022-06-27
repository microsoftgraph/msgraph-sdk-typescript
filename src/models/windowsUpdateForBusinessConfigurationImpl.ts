import {AutomaticUpdateMode} from './automaticUpdateMode';
import {createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue} from './createWindowsUpdateInstallScheduleTypeFromDiscriminatorValue';
import {DeviceConfigurationImpl, WindowsUpdateInstallScheduleTypeImpl} from './index';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessConfiguration} from './windowsUpdateForBusinessConfiguration';
import {WindowsUpdateInstallScheduleType} from './windowsUpdateInstallScheduleType';
import {WindowsUpdateType} from './windowsUpdateType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUpdateForBusinessConfigurationImpl extends DeviceConfigurationImpl implements WindowsUpdateForBusinessConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Automatic update mode. Possible values are: userDefined, notifyDownload, autoInstallAtMaintenanceTime, autoInstallAndRebootAtMaintenanceTime, autoInstallAndRebootAtScheduledTime, autoInstallAndRebootWithoutEndUserControl, windowsDefault. */
    public automaticUpdateMode?: AutomaticUpdateMode | undefined;
    /** Determines which branch devices will receive their updates from. Possible values are: userDefined, all, businessReadyOnly, windowsInsiderBuildFast, windowsInsiderBuildSlow, windowsInsiderBuildRelease. */
    public businessReadyUpdatesOnly?: WindowsUpdateType | undefined;
    /** Delivery Optimization Mode. Possible values are: userDefined, httpOnly, httpWithPeeringNat, httpWithPeeringPrivateGroup, httpWithInternetPeering, simpleDownload, bypassMode. */
    public deliveryOptimizationMode?: WindowsDeliveryOptimizationMode | undefined;
    /** Exclude Windows update Drivers */
    public driversExcluded?: boolean | undefined;
    /** Defer Feature Updates by these many days */
    public featureUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Feature Updates */
    public featureUpdatesPaused?: boolean | undefined;
    /** Feature Updates Pause Expiry datetime */
    public featureUpdatesPauseExpiryDateTime?: Date | undefined;
    /** Installation schedule */
    public installationSchedule?: WindowsUpdateInstallScheduleType | undefined;
    /** Allow Microsoft Update Service */
    public microsoftUpdateServiceAllowed?: boolean | undefined;
    /** The pre-release features. Possible values are: userDefined, settingsOnly, settingsAndExperimentations, notAllowed. */
    public prereleaseFeatures?: PrereleaseFeatures | undefined;
    /** Defer Quality Updates by these many days */
    public qualityUpdatesDeferralPeriodInDays?: number | undefined;
    /** Pause Quality Updates */
    public qualityUpdatesPaused?: boolean | undefined;
    /** Quality Updates Pause Expiry datetime */
    public qualityUpdatesPauseExpiryDateTime?: Date | undefined;
    /**
     * Instantiates a new WindowsUpdateForBusinessConfiguration and sets the default values.
     * @param windowsUpdateForBusinessConfigurationParameterValue 
     */
    public constructor(windowsUpdateForBusinessConfigurationParameterValue?: WindowsUpdateForBusinessConfiguration | undefined) {
        super(windowsUpdateForBusinessConfigurationParameterValue);
        this.additionalData = windowsUpdateForBusinessConfigurationParameterValue?.additionalData ? windowsUpdateForBusinessConfigurationParameterValue?.additionalData! : {};
        this.automaticUpdateMode = windowsUpdateForBusinessConfigurationParameterValue?.automaticUpdateMode;
        this.businessReadyUpdatesOnly = windowsUpdateForBusinessConfigurationParameterValue?.businessReadyUpdatesOnly;
        this.deliveryOptimizationMode = windowsUpdateForBusinessConfigurationParameterValue?.deliveryOptimizationMode;
        this.driversExcluded = windowsUpdateForBusinessConfigurationParameterValue?.driversExcluded;
        this.featureUpdatesDeferralPeriodInDays = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesDeferralPeriodInDays;
        this.featureUpdatesPaused = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesPaused;
        this.featureUpdatesPauseExpiryDateTime = windowsUpdateForBusinessConfigurationParameterValue?.featureUpdatesPauseExpiryDateTime;
        this.installationSchedule = windowsUpdateForBusinessConfigurationParameterValue?.installationSchedule instanceof WindowsUpdateInstallScheduleTypeImpl? windowsUpdateForBusinessConfigurationParameterValue?.installationSchedule:new WindowsUpdateInstallScheduleTypeImpl(windowsUpdateForBusinessConfigurationParameterValue?.installationSchedule);
        this.microsoftUpdateServiceAllowed = windowsUpdateForBusinessConfigurationParameterValue?.microsoftUpdateServiceAllowed;
        this.prereleaseFeatures = windowsUpdateForBusinessConfigurationParameterValue?.prereleaseFeatures;
        this.qualityUpdatesDeferralPeriodInDays = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesDeferralPeriodInDays;
        this.qualityUpdatesPaused = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesPaused;
        this.qualityUpdatesPauseExpiryDateTime = windowsUpdateForBusinessConfigurationParameterValue?.qualityUpdatesPauseExpiryDateTime;
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
            writer.writeObjectValue<WindowsUpdateInstallScheduleTypeImpl>("installationSchedule", new WindowsUpdateInstallScheduleTypeImpl(this.installationSchedule));
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
        writer.writeAdditionalData(this.additionalData);
    };
}
