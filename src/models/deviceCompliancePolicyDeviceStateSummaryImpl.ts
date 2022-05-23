import {DeviceCompliancePolicyDeviceStateSummary} from './deviceCompliancePolicyDeviceStateSummary';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class DeviceCompliancePolicyDeviceStateSummaryImpl extends EntityImpl implements DeviceCompliancePolicyDeviceStateSummary, Parsable {
    /** Number of compliant devices */
    public compliantDeviceCount?: number | undefined;
    /** Number of devices that have compliance managed by System Center Configuration Manager */
    public configManagerCount?: number | undefined;
    /** Number of conflict devices */
    public conflictDeviceCount?: number | undefined;
    /** Number of error devices */
    public errorDeviceCount?: number | undefined;
    /** Number of devices that are in grace period */
    public inGracePeriodCount?: number | undefined;
    /** Number of NonCompliant devices */
    public nonCompliantDeviceCount?: number | undefined;
    /** Number of not applicable devices */
    public notApplicableDeviceCount?: number | undefined;
    /** Number of remediated devices */
    public remediatedDeviceCount?: number | undefined;
    /** Number of unknown devices */
    public unknownDeviceCount?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyDeviceStateSummary and sets the default values.
     * @param deviceCompliancePolicyDeviceStateSummaryParameterValue 
     */
    public constructor(deviceCompliancePolicyDeviceStateSummaryParameterValue?: DeviceCompliancePolicyDeviceStateSummary | undefined) {
        super();
        this.compliantDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.compliantDeviceCount ;
        this.configManagerCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.configManagerCount ;
        this.conflictDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.conflictDeviceCount ;
        this.errorDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.errorDeviceCount ;
        this.inGracePeriodCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.inGracePeriodCount ;
        this.nonCompliantDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.nonCompliantDeviceCount ;
        this.notApplicableDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.notApplicableDeviceCount ;
        this.remediatedDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.remediatedDeviceCount ;
        this.unknownDeviceCount = deviceCompliancePolicyDeviceStateSummaryParameterValue?.unknownDeviceCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "configManagerCount": n => { this.configManagerCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "inGracePeriodCount": n => { this.inGracePeriodCount = n.getNumberValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
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
        if(this.configManagerCount){
        writer.writeNumberValue("configManagerCount", this.configManagerCount);
        }
        if(this.conflictDeviceCount){
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.errorDeviceCount){
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.inGracePeriodCount){
        writer.writeNumberValue("inGracePeriodCount", this.inGracePeriodCount);
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
        if(this.unknownDeviceCount){
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
    };
}
