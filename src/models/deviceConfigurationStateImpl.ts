import {ComplianceStatus} from './complianceStatus';
import {createDeviceConfigurationSettingStateFromDiscriminatorValue} from './createDeviceConfigurationSettingStateFromDiscriminatorValue';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceConfigurationSettingStateImpl, EntityImpl} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Configuration State for a given device. */
export class DeviceConfigurationStateImpl extends EntityImpl implements DeviceConfigurationState {
    /** The name of the policy for this policyBase */
    private _displayName?: string | undefined;
    /** Platform type that the policy applies to */
    private _platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    private _settingCount?: number | undefined;
    /** The settingStates property */
    private _settingStates?: DeviceConfigurationSettingState[] | undefined;
    /** The compliance state of the policy */
    private _state?: ComplianceStatus | undefined;
    /** The version of the policy */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceConfigurationState and sets the default values.
     * @param deviceConfigurationStateParameterValue 
     */
    public constructor(deviceConfigurationStateParameterValue?: DeviceConfigurationState | undefined) {
        super(deviceConfigurationStateParameterValue);
        this._displayName = deviceConfigurationStateParameterValue?.displayName;
        this._platformType = deviceConfigurationStateParameterValue?.platformType;
        this._settingCount = deviceConfigurationStateParameterValue?.settingCount;
        this._settingStates = deviceConfigurationStateParameterValue?.settingStates;
        this._state = deviceConfigurationStateParameterValue?.state;
        this._version = deviceConfigurationStateParameterValue?.version;
    };
    /**
     * Gets the displayName property value. The name of the policy for this policyBase
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the policy for this policyBase
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "platformType": n => { this.platformType = n.getEnumValue<PolicyPlatformType>(PolicyPlatformType); },
            "settingCount": n => { this.settingCount = n.getNumberValue(); },
            "settingStates": n => { this.settingStates = n.getCollectionOfObjectValues<DeviceConfigurationSettingStateImpl>(createDeviceConfigurationSettingStateFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the platformType property value. Platform type that the policy applies to
     * @returns a policyPlatformType
     */
    public get platformType() {
        return this._platformType;
    };
    /**
     * Sets the platformType property value. Platform type that the policy applies to
     * @param value Value to set for the platformType property.
     */
    public set platformType(value: PolicyPlatformType | undefined) {
        if(value) {
            this._platformType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.platformType){
            writer.writeEnumValue<PolicyPlatformType>("platformType", this.platformType);
        }
        if(this.settingCount){
            writer.writeNumberValue("settingCount", this.settingCount);
        }
        if(this.settingStates && this.settingStates.length != 0){        const settingStatesArrValue: DeviceConfigurationSettingStateImpl[] = [];
        this.settingStates?.forEach(element => {
            settingStatesArrValue.push((element instanceof DeviceConfigurationSettingStateImpl? element as DeviceConfigurationSettingStateImpl:new DeviceConfigurationSettingStateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceConfigurationSettingStateImpl>("settingStates", settingStatesArrValue);
        }
        if(this.state){
            writer.writeEnumValue<ComplianceStatus>("state", this.state);
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the settingCount property value. Count of how many setting a policy holds
     * @returns a integer
     */
    public get settingCount() {
        return this._settingCount;
    };
    /**
     * Sets the settingCount property value. Count of how many setting a policy holds
     * @param value Value to set for the settingCount property.
     */
    public set settingCount(value: number | undefined) {
        if(value) {
            this._settingCount = value;
        }
    };
    /**
     * Gets the settingStates property value. The settingStates property
     * @returns a DeviceConfigurationSettingStateInterface
     */
    public get settingStates() {
        return this._settingStates;
    };
    /**
     * Sets the settingStates property value. The settingStates property
     * @param value Value to set for the settingStates property.
     */
    public set settingStates(value: DeviceConfigurationSettingState[] | undefined) {
        if(value) {
            const settingStatesArrValue: DeviceConfigurationSettingStateImpl[] = [];
            this.settingStates?.forEach(element => {
                settingStatesArrValue.push((element instanceof DeviceConfigurationSettingStateImpl? element as DeviceConfigurationSettingStateImpl:new DeviceConfigurationSettingStateImpl(element)));
            });
            this._settingStates = settingStatesArrValue;
        }
    };
    /**
     * Gets the state property value. The compliance state of the policy
     * @returns a complianceStatus
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The compliance state of the policy
     * @param value Value to set for the state property.
     */
    public set state(value: ComplianceStatus | undefined) {
        if(value) {
            this._state = value;
        }
    };
    /**
     * Gets the version property value. The version of the policy
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version of the policy
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
