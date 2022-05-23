import {ComplianceStatus} from './complianceStatus';
import {createDeviceCompliancePolicySettingStateFromDiscriminatorValue} from './createDeviceCompliancePolicySettingStateFromDiscriminatorValue';
import {DeviceCompliancePolicySettingState} from './deviceCompliancePolicySettingState';
import {DeviceCompliancePolicyState} from './deviceCompliancePolicyState';
import {DeviceCompliancePolicySettingStateImpl, EntityImpl} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compliance Policy State for a given device. */
export class DeviceCompliancePolicyStateImpl extends EntityImpl implements DeviceCompliancePolicyState, Parsable {
    /** The name of the policy for this policyBase */
    public displayName?: string | undefined;
    /** Platform type that the policy applies to */
    public platformType?: PolicyPlatformType | undefined;
    /** Count of how many setting a policy holds */
    public settingCount?: number | undefined;
    /** The settingStates property */
    public settingStates?: DeviceCompliancePolicySettingState[] | undefined;
    /** The compliance state of the policy */
    public state?: ComplianceStatus | undefined;
    /** The version of the policy */
    public version?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyState and sets the default values.
     * @param deviceCompliancePolicyStateParameterValue 
     */
    public constructor(deviceCompliancePolicyStateParameterValue?: DeviceCompliancePolicyState | undefined) {
        super();
        this.displayName = deviceCompliancePolicyStateParameterValue?.displayName ;
        this.platformType = deviceCompliancePolicyStateParameterValue?.platformType ;
        this.settingCount = deviceCompliancePolicyStateParameterValue?.settingCount ;
        this.settingStates = deviceCompliancePolicyStateParameterValue?.settingStates ;
        this.state = deviceCompliancePolicyStateParameterValue?.state ;
        this.version = deviceCompliancePolicyStateParameterValue?.version ;
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
            "settingStates": n => { this.settingStates = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingStateImpl>(createDeviceCompliancePolicySettingStateFromDiscriminatorValue); },
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
        if(this.settingStates && this.settingStates.length != 0){        const settingStatesArrValue: DeviceCompliancePolicySettingStateImpl[] = []; this.settingStates?.forEach(element => {settingStatesArrValue.push(new DeviceCompliancePolicySettingStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingStateImpl>("settingStates", settingStatesArrValue);
        }
        if(this.state){
        writer.writeEnumValue<ComplianceStatus>("state", this.state);
        }
        if(this.version){
        writer.writeNumberValue("version", this.version);
        }
    };
}
