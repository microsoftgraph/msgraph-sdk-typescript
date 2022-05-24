import {EntityImpl} from './index';
import {SoftwareUpdateStatusSummary} from './softwareUpdateStatusSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the deviceManagement singleton. */
export class SoftwareUpdateStatusSummaryImpl extends EntityImpl implements Parsable, SoftwareUpdateStatusSummary {
    /** Number of compliant devices. */
    public compliantDeviceCount?: number | undefined;
    /** Number of compliant users. */
    public compliantUserCount?: number | undefined;
    /** Number of conflict devices. */
    public conflictDeviceCount?: number | undefined;
    /** Number of conflict users. */
    public conflictUserCount?: number | undefined;
    /** The name of the policy. */
    public displayName?: string | undefined;
    /** Number of devices had error. */
    public errorDeviceCount?: number | undefined;
    /** Number of users had error. */
    public errorUserCount?: number | undefined;
    /** Number of non compliant devices. */
    public nonCompliantDeviceCount?: number | undefined;
    /** Number of non compliant users. */
    public nonCompliantUserCount?: number | undefined;
    /** Number of not applicable devices. */
    public notApplicableDeviceCount?: number | undefined;
    /** Number of not applicable users. */
    public notApplicableUserCount?: number | undefined;
    /** Number of remediated devices. */
    public remediatedDeviceCount?: number | undefined;
    /** Number of remediated users. */
    public remediatedUserCount?: number | undefined;
    /** Number of unknown devices. */
    public unknownDeviceCount?: number | undefined;
    /** Number of unknown users. */
    public unknownUserCount?: number | undefined;
    /**
     * Instantiates a new softwareUpdateStatusSummary and sets the default values.
     * @param softwareUpdateStatusSummaryParameterValue 
     */
    public constructor(softwareUpdateStatusSummaryParameterValue?: SoftwareUpdateStatusSummary | undefined) {
        super();
        this.compliantDeviceCount = softwareUpdateStatusSummaryParameterValue?.compliantDeviceCount ;
        this.compliantUserCount = softwareUpdateStatusSummaryParameterValue?.compliantUserCount ;
        this.conflictDeviceCount = softwareUpdateStatusSummaryParameterValue?.conflictDeviceCount ;
        this.conflictUserCount = softwareUpdateStatusSummaryParameterValue?.conflictUserCount ;
        this.displayName = softwareUpdateStatusSummaryParameterValue?.displayName ;
        this.errorDeviceCount = softwareUpdateStatusSummaryParameterValue?.errorDeviceCount ;
        this.errorUserCount = softwareUpdateStatusSummaryParameterValue?.errorUserCount ;
        this.nonCompliantDeviceCount = softwareUpdateStatusSummaryParameterValue?.nonCompliantDeviceCount ;
        this.nonCompliantUserCount = softwareUpdateStatusSummaryParameterValue?.nonCompliantUserCount ;
        this.notApplicableDeviceCount = softwareUpdateStatusSummaryParameterValue?.notApplicableDeviceCount ;
        this.notApplicableUserCount = softwareUpdateStatusSummaryParameterValue?.notApplicableUserCount ;
        this.remediatedDeviceCount = softwareUpdateStatusSummaryParameterValue?.remediatedDeviceCount ;
        this.remediatedUserCount = softwareUpdateStatusSummaryParameterValue?.remediatedUserCount ;
        this.unknownDeviceCount = softwareUpdateStatusSummaryParameterValue?.unknownDeviceCount ;
        this.unknownUserCount = softwareUpdateStatusSummaryParameterValue?.unknownUserCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "compliantDeviceCount": n => { this.compliantDeviceCount = n.getNumberValue(); },
            "compliantUserCount": n => { this.compliantUserCount = n.getNumberValue(); },
            "conflictDeviceCount": n => { this.conflictDeviceCount = n.getNumberValue(); },
            "conflictUserCount": n => { this.conflictUserCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "errorDeviceCount": n => { this.errorDeviceCount = n.getNumberValue(); },
            "errorUserCount": n => { this.errorUserCount = n.getNumberValue(); },
            "nonCompliantDeviceCount": n => { this.nonCompliantDeviceCount = n.getNumberValue(); },
            "nonCompliantUserCount": n => { this.nonCompliantUserCount = n.getNumberValue(); },
            "notApplicableDeviceCount": n => { this.notApplicableDeviceCount = n.getNumberValue(); },
            "notApplicableUserCount": n => { this.notApplicableUserCount = n.getNumberValue(); },
            "remediatedDeviceCount": n => { this.remediatedDeviceCount = n.getNumberValue(); },
            "remediatedUserCount": n => { this.remediatedUserCount = n.getNumberValue(); },
            "unknownDeviceCount": n => { this.unknownDeviceCount = n.getNumberValue(); },
            "unknownUserCount": n => { this.unknownUserCount = n.getNumberValue(); },
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
        if(this.compliantUserCount){
        writer.writeNumberValue("compliantUserCount", this.compliantUserCount);
        }
        if(this.conflictDeviceCount){
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        }
        if(this.conflictUserCount){
        writer.writeNumberValue("conflictUserCount", this.conflictUserCount);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.errorDeviceCount){
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        }
        if(this.errorUserCount){
        writer.writeNumberValue("errorUserCount", this.errorUserCount);
        }
        if(this.nonCompliantDeviceCount){
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        }
        if(this.nonCompliantUserCount){
        writer.writeNumberValue("nonCompliantUserCount", this.nonCompliantUserCount);
        }
        if(this.notApplicableDeviceCount){
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        }
        if(this.notApplicableUserCount){
        writer.writeNumberValue("notApplicableUserCount", this.notApplicableUserCount);
        }
        if(this.remediatedDeviceCount){
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        }
        if(this.remediatedUserCount){
        writer.writeNumberValue("remediatedUserCount", this.remediatedUserCount);
        }
        if(this.unknownDeviceCount){
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        }
        if(this.unknownUserCount){
        writer.writeNumberValue("unknownUserCount", this.unknownUserCount);
        }
    };
}
