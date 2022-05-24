import {ComplianceStatus} from './complianceStatus';
import {createDeviceConfigurationSettingStateFromDiscriminatorValue} from './createDeviceConfigurationSettingStateFromDiscriminatorValue';
import {DeviceConfigurationSettingState} from './deviceConfigurationSettingState';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceConfigurationSettingStateImpl, EntityImpl} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Configuration State for a given device. */
export class DeviceConfigurationStateImpl extends EntityImpl implements DeviceConfigurationState, Parsable {
    /** The name of the policy for this policyBase */
    public displayName?: string | undefined;
    /** Platform type that the policy applies to */
    public platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    public settingCount?: number | undefined;
    /** The settingStates property */
    public settingStates?: DeviceConfigurationSettingState[] | undefined;
    /** The compliance state of the policy */
    public state?: ComplianceStatus | undefined;
    /** The version of the policy */
    public version?: number | undefined;
    /**
     * Instantiates a new deviceConfigurationState and sets the default values.
     * @param deviceConfigurationStateParameterValue 
     */
    public constructor(deviceConfigurationStateParameterValue?: DeviceConfigurationState | undefined) {
        super();
        this.displayName = deviceConfigurationStateParameterValue?.displayName ;
        this.platformType = deviceConfigurationStateParameterValue?.platformType ;
        this.settingCount = deviceConfigurationStateParameterValue?.settingCount ;
        this.settingStates = deviceConfigurationStateParameterValue?.settingStates ;
        this.state = deviceConfigurationStateParameterValue?.state ;
        this.version = deviceConfigurationStateParameterValue?.version ;
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
        if(this.settingStates && this.settingStates.length != 0){        const settingStatesArrValue: DeviceConfigurationSettingStateImpl[] = []; this.settingStates?.forEach(element => {settingStatesArrValue.push(new DeviceConfigurationSettingStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationSettingStateImpl>("settingStates", settingStatesArrValue);
        }
        if(this.state){
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        }
        if(this.version){
        writer.writeNumberValue("version", this.version);
        }
    };
}
