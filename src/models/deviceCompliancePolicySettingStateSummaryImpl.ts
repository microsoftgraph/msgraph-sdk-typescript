import {createDeviceComplianceSettingStateFromDiscriminatorValue} from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateImpl, EntityImpl} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compilance Policy Setting State summary across the account. */
export class DeviceCompliancePolicySettingStateSummaryImpl extends EntityImpl implements DeviceCompliancePolicySettingStateSummary {
    /** Number of compliant devices */
    private _compliantDeviceCount?: number | undefined;
    /** Number of conflict devices */
    private _conflictDeviceCount?: number | undefined;
    /** Not yet documented */
    private _deviceComplianceSettingStates?: DeviceComplianceSettingState[] | undefined;
    /** Number of error devices */
    private _errorDeviceCount?: number | undefined;
    /** Number of NonCompliant devices */
    private _nonCompliantDeviceCount?: number | undefined;
    /** Number of not applicable devices */
    private _notApplicableDeviceCount?: number | undefined;
    /** Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all. */
    private _platformType?: PolicyPlatformType | undefined;
    /** Number of remediated devices */
    private _remediatedDeviceCount?: number | undefined;
    /** The setting class name and property name. */
    private _setting?: string | undefined;
    /** Name of the setting. */
    private _settingName?: string | undefined;
    /** Number of unknown devices */
    private _unknownDeviceCount?: number | undefined;
    /**
     * Gets the compliantDeviceCount property value. Number of compliant devices
     * @returns a integer
     */
    public get compliantDeviceCount() {
        return this._compliantDeviceCount;
    };
    /**
     * Sets the compliantDeviceCount property value. Number of compliant devices
     * @param value Value to set for the compliantDeviceCount property.
     */
    public set compliantDeviceCount(value: number | undefined) {
        if(value) {
            this._compliantDeviceCount = value;
        }
    };
    /**
     * Gets the conflictDeviceCount property value. Number of conflict devices
     * @returns a integer
     */
    public get conflictDeviceCount() {
        return this._conflictDeviceCount;
    };
    /**
     * Sets the conflictDeviceCount property value. Number of conflict devices
     * @param value Value to set for the conflictDeviceCount property.
     */
    public set conflictDeviceCount(value: number | undefined) {
        if(value) {
            this._conflictDeviceCount = value;
        }
    };
    /**
     * Instantiates a new deviceCompliancePolicySettingStateSummary and sets the default values.
     * @param deviceCompliancePolicySettingStateSummaryParameterValue 
     */
    public constructor(deviceCompliancePolicySettingStateSummaryParameterValue?: DeviceCompliancePolicySettingStateSummary | undefined) {
        super(deviceCompliancePolicySettingStateSummaryParameterValue);
        this._compliantDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.compliantDeviceCount;
        this._conflictDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.conflictDeviceCount;
        this._deviceComplianceSettingStates = deviceCompliancePolicySettingStateSummaryParameterValue?.deviceComplianceSettingStates;
        this._errorDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.errorDeviceCount;
        this._nonCompliantDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.nonCompliantDeviceCount;
        this._notApplicableDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.notApplicableDeviceCount;
        this._platformType = deviceCompliancePolicySettingStateSummaryParameterValue?.platformType;
        this._remediatedDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.remediatedDeviceCount;
        this._setting = deviceCompliancePolicySettingStateSummaryParameterValue?.setting;
        this._settingName = deviceCompliancePolicySettingStateSummaryParameterValue?.settingName;
        this._unknownDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.unknownDeviceCount;
    };
    /**
     * Gets the deviceComplianceSettingStates property value. Not yet documented
     * @returns a DeviceComplianceSettingStateInterface
     */
    public get deviceComplianceSettingStates() {
        return this._deviceComplianceSettingStates;
    };
    /**
     * Sets the deviceComplianceSettingStates property value. Not yet documented
     * @param value Value to set for the deviceComplianceSettingStates property.
     */
    public set deviceComplianceSettingStates(value: DeviceComplianceSettingState[] | undefined) {
        if(value) {
            const deviceComplianceSettingStatesArrValue: DeviceComplianceSettingStateImpl[] = [];
            this.deviceComplianceSettingStates?.forEach(element => {
                deviceComplianceSettingStatesArrValue.push((element instanceof DeviceComplianceSettingStateImpl? element as DeviceComplianceSettingStateImpl:new DeviceComplianceSettingStateImpl(element)));
            });
            this._deviceComplianceSettingStates = deviceComplianceSettingStatesArrValue;
        }
    };
    /**
     * Gets the errorDeviceCount property value. Number of error devices
     * @returns a integer
     */
    public get errorDeviceCount() {
        return this._errorDeviceCount;
    };
    /**
     * Sets the errorDeviceCount property value. Number of error devices
     * @param value Value to set for the errorDeviceCount property.
     */
    public set errorDeviceCount(value: number | undefined) {
        if(value) {
            this._errorDeviceCount = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "deviceComplianceSettingStates": n => { this.deviceComplianceSettingStates = n.getCollectionOfObjectValues<DeviceComplianceSettingStateImpl>(createDeviceComplianceSettingStateFromDiscriminatorValue); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "platformType": n => { this.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
            "setting": n => { this.setting = n.getStringValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the nonCompliantDeviceCount property value. Number of NonCompliant devices
     * @returns a integer
     */
    public get nonCompliantDeviceCount() {
        return this._nonCompliantDeviceCount;
    };
    /**
     * Sets the nonCompliantDeviceCount property value. Number of NonCompliant devices
     * @param value Value to set for the nonCompliantDeviceCount property.
     */
    public set nonCompliantDeviceCount(value: number | undefined) {
        if(value) {
            this._nonCompliantDeviceCount = value;
        }
    };
    /**
     * Gets the notApplicableDeviceCount property value. Number of not applicable devices
     * @returns a integer
     */
    public get notApplicableDeviceCount() {
        return this._notApplicableDeviceCount;
    };
    /**
     * Sets the notApplicableDeviceCount property value. Number of not applicable devices
     * @param value Value to set for the notApplicableDeviceCount property.
     */
    public set notApplicableDeviceCount(value: number | undefined) {
        if(value) {
            this._notApplicableDeviceCount = value;
        }
    };
    /**
     * Gets the platformType property value. Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all.
     * @returns a policyPlatformType
     */
    public get platformType() {
        return this._platformType;
    };
    /**
     * Sets the platformType property value. Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all.
     * @param value Value to set for the platformType property.
     */
    public set platformType(value: PolicyPlatformType | undefined) {
        if(value) {
            this._platformType = value;
        }
    };
    /**
     * Gets the remediatedDeviceCount property value. Number of remediated devices
     * @returns a integer
     */
    public get remediatedDeviceCount() {
        return this._remediatedDeviceCount;
    };
    /**
     * Sets the remediatedDeviceCount property value. Number of remediated devices
     * @param value Value to set for the remediatedDeviceCount property.
     */
    public set remediatedDeviceCount(value: number | undefined) {
        if(value) {
            this._remediatedDeviceCount = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.compliantDeviceCount){
            writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        }
        if(this.conflictDeviceCount){
            writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.deviceComplianceSettingStates && this.deviceComplianceSettingStates.length != 0){        const deviceComplianceSettingStatesArrValue: DeviceComplianceSettingStateImpl[] = [];
        this.deviceComplianceSettingStates?.forEach(element => {
            deviceComplianceSettingStatesArrValue.push((element instanceof DeviceComplianceSettingStateImpl? element as DeviceComplianceSettingStateImpl:new DeviceComplianceSettingStateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceSettingStateImpl>("deviceComplianceSettingStates", deviceComplianceSettingStatesArrValue);
        }
        if(this.errorDeviceCount){
            writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.nonCompliantDeviceCount){
            writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.notApplicableDeviceCount){
            writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.platformType){
            writer.writeEnumValue<PolicyPlatformType>("platformType", this.platformType);
        }
        if(this.remediatedDeviceCount){
            writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.setting){
            writer.writeStringValue("setting", this.setting);
        }
        if(this.settingName){
            writer.writeStringValue("settingName", this.settingName);
        }
        if(this.unknownDeviceCount){
            writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
    };
    /**
     * Gets the setting property value. The setting class name and property name.
     * @returns a string
     */
    public get setting() {
        return this._setting;
    };
    /**
     * Sets the setting property value. The setting class name and property name.
     * @param value Value to set for the setting property.
     */
    public set setting(value: string | undefined) {
        if(value) {
            this._setting = value;
        }
    };
    /**
     * Gets the settingName property value. Name of the setting.
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. Name of the setting.
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        if(value) {
            this._settingName = value;
        }
    };
    /**
     * Gets the unknownDeviceCount property value. Number of unknown devices
     * @returns a integer
     */
    public get unknownDeviceCount() {
        return this._unknownDeviceCount;
    };
    /**
     * Sets the unknownDeviceCount property value. Number of unknown devices
     * @param value Value to set for the unknownDeviceCount property.
     */
    public set unknownDeviceCount(value: number | undefined) {
        if(value) {
            this._unknownDeviceCount = value;
        }
    };
}
