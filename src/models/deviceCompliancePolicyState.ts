import {ComplianceStatus} from './complianceStatus';
import {createDeviceCompliancePolicySettingStateFromDiscriminatorValue} from './createDeviceCompliancePolicySettingStateFromDiscriminatorValue';
import {DeviceCompliancePolicySettingState, Entity} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Device Compliance Policy State for a given device.
 */
export class DeviceCompliancePolicyState extends Entity implements Parsable {
    /** The name of the policy for this policyBase */
    private _displayName?: string | undefined;
    /** Supported platform types for policies. */
    private _platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    private _settingCount?: number | undefined;
    /** The settingStates property */
    private _settingStates?: DeviceCompliancePolicySettingState[] | undefined;
    /** The state property */
    private _state?: ComplianceStatus | undefined;
    /** The version of the policy */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyState and sets the default values.
     */
    public constructor() {
        super();
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
        this._displayName = value;
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
            "settingStates": n => { this.settingStates = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingState>(createDeviceCompliancePolicySettingStateFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<ComplianceStatus>(ComplianceStatus); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the platformType property value. Supported platform types for policies.
     * @returns a policyPlatformType
     */
    public get platformType() {
        return this._platformType;
    };
    /**
     * Sets the platformType property value. Supported platform types for policies.
     * @param value Value to set for the platformType property.
     */
    public set platformType(value: PolicyPlatformType | undefined) {
        this._platformType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<PolicyPlatformType>("platformType", this.platformType);
        writer.writeNumberValue("settingCount", this.settingCount);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingState>("settingStates", this.settingStates);
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        writer.writeNumberValue("version", this.version);
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
        this._settingCount = value;
    };
    /**
     * Gets the settingStates property value. The settingStates property
     * @returns a deviceCompliancePolicySettingState
     */
    public get settingStates() {
        return this._settingStates;
    };
    /**
     * Sets the settingStates property value. The settingStates property
     * @param value Value to set for the settingStates property.
     */
    public set settingStates(value: DeviceCompliancePolicySettingState[] | undefined) {
        this._settingStates = value;
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
        this._version = value;
    };
}
