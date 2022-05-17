import {createDeviceComplianceSettingStateFromDiscriminatorValue} from './createDeviceComplianceSettingStateFromDiscriminatorValue';
import {DeviceCompliancePolicySettingStateSummary} from './deviceCompliancePolicySettingStateSummary';
import {DeviceComplianceSettingState} from './deviceComplianceSettingState';
import {DeviceComplianceSettingStateImpl, EntityImpl} from './index';
import {PolicyPlatformType} from './policyPlatformType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicySettingStateSummaryImpl extends EntityImpl implements DeviceCompliancePolicySettingStateSummary, Parsable {
    /** Number of compliant devices */
    compliantDeviceCount?: number | undefined;
    /** Number of conflict devices */
    conflictDeviceCount?: number | undefined;
    /** Not yet documented */
    deviceComplianceSettingStates?: DeviceComplianceSettingState[] | undefined;
    /** Number of error devices */
    errorDeviceCount?: number | undefined;
    /** Number of NonCompliant devices */
    nonCompliantDeviceCount?: number | undefined;
    /** Number of not applicable devices */
    notApplicableDeviceCount?: number | undefined;
    /** Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all. */
    platformType?: PolicyPlatformType | undefined;
    /** Number of remediated devices */
    remediatedDeviceCount?: number | undefined;
    /** The setting class name and property name. */
    setting?: string | undefined;
    /** Name of the setting. */
    settingName?: string | undefined;
    /** Number of unknown devices */
    unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicySettingStateSummary and sets the default values.
     * @param deviceCompliancePolicySettingStateSummaryParameterValue 
     */
    public constructor(deviceCompliancePolicySettingStateSummaryParameterValue?: DeviceCompliancePolicySettingStateSummary | undefined) {
        super();
        this.compliantDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.compliantDeviceCount ;
        this.conflictDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.conflictDeviceCount ;
        this.deviceComplianceSettingStates = deviceCompliancePolicySettingStateSummaryParameterValue?.deviceComplianceSettingStates ;
        this.errorDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.errorDeviceCount ;
        this.nonCompliantDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.nonCompliantDeviceCount ;
        this.notApplicableDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.notApplicableDeviceCount ;
        this.platformType = deviceCompliancePolicySettingStateSummaryParameterValue?.platformType ;
        this.remediatedDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.remediatedDeviceCount ;
        this.setting = deviceCompliancePolicySettingStateSummaryParameterValue?.setting ;
        this.settingName = deviceCompliancePolicySettingStateSummaryParameterValue?.settingName ;
        this.unknownDeviceCount = deviceCompliancePolicySettingStateSummaryParameterValue?.unknownDeviceCount ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.compliantDeviceCount){
        if(this.compliantDeviceCount)
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        }
        if(this.conflictDeviceCount){
        if(this.conflictDeviceCount)
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.deviceComplianceSettingStates){
        const deviceComplianceSettingStatesArrValue: DeviceComplianceSettingStateImpl[] = []; this.deviceComplianceSettingStates?.forEach(element => {deviceComplianceSettingStatesArrValue.push(new DeviceComplianceSettingStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceSettingStateImpl>("deviceComplianceSettingStates", deviceComplianceSettingStatesArrValue);
        }
        if(this.errorDeviceCount){
        if(this.errorDeviceCount)
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.nonCompliantDeviceCount){
        if(this.nonCompliantDeviceCount)
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.notApplicableDeviceCount){
        if(this.notApplicableDeviceCount)
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.platformType){
        if(this.platformType)
        writer.writeEnumValue<PolicyPlatformType>("platformType", this.platformType);
        }
        if(this.remediatedDeviceCount){
        if(this.remediatedDeviceCount)
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.setting){
        if(this.setting)
        writer.writeStringValue("setting", this.setting);
        }
        if(this.settingName){
        if(this.settingName)
        writer.writeStringValue("settingName", this.settingName);
        }
        if(this.unknownDeviceCount){
        if(this.unknownDeviceCount)
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
    };
}
