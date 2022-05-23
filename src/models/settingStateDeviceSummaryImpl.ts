import {EntityImpl} from './index';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Compilance Policy and Configuration for a Setting State summary */
export class SettingStateDeviceSummaryImpl extends EntityImpl implements Parsable, SettingStateDeviceSummary {
    /** Device Compliant count for the setting */
    public compliantDeviceCount?: number | undefined;
    /** Device conflict error count for the setting */
    public conflictDeviceCount?: number | undefined;
    /** Device error count for the setting */
    public errorDeviceCount?: number | undefined;
    /** Name of the InstancePath for the setting */
    public instancePath?: string | undefined;
    /** Device NonCompliant count for the setting */
    public nonCompliantDeviceCount?: number | undefined;
    /** Device Not Applicable count for the setting */
    public notApplicableDeviceCount?: number | undefined;
    /** Device Compliant count for the setting */
    public remediatedDeviceCount?: number | undefined;
    /** Name of the setting */
    public settingName?: string | undefined;
    /** Device Unkown count for the setting */
    public unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new settingStateDeviceSummary and sets the default values.
     * @param settingStateDeviceSummaryParameterValue 
     */
    public constructor(settingStateDeviceSummaryParameterValue?: SettingStateDeviceSummary | undefined) {
        super();
        this.compliantDeviceCount = settingStateDeviceSummaryParameterValue?.compliantDeviceCount ;
        this.conflictDeviceCount = settingStateDeviceSummaryParameterValue?.conflictDeviceCount ;
        this.errorDeviceCount = settingStateDeviceSummaryParameterValue?.errorDeviceCount ;
        this.instancePath = settingStateDeviceSummaryParameterValue?.instancePath ;
        this.nonCompliantDeviceCount = settingStateDeviceSummaryParameterValue?.nonCompliantDeviceCount ;
        this.notApplicableDeviceCount = settingStateDeviceSummaryParameterValue?.notApplicableDeviceCount ;
        this.remediatedDeviceCount = settingStateDeviceSummaryParameterValue?.remediatedDeviceCount ;
        this.settingName = settingStateDeviceSummaryParameterValue?.settingName ;
        this.unknownDeviceCount = settingStateDeviceSummaryParameterValue?.unknownDeviceCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "instancePath": n => { this.instancePath = n.getStringValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
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
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        }
        if(this.conflictDeviceCount){
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.errorDeviceCount){
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.instancePath){
        writer.writeStringValue("instancePath", this.instancePath);
        }
        if(this.nonCompliantDeviceCount){
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.notApplicableDeviceCount){
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.remediatedDeviceCount){
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.settingName){
        writer.writeStringValue("settingName", this.settingName);
        }
        if(this.unknownDeviceCount){
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
    };
}
