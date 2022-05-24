import {LicenseAssignmentState} from './licenseAssignmentState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LicenseAssignmentStateImpl implements AdditionalDataHolder, LicenseAssignmentState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only. */
    public assignedByGroup?: string | undefined;
    /** The service plans that are disabled in this assignment. Read-Only. */
    public disabledPlans?: string[] | undefined;
    /** License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. The possible values are CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Other. For more information on how to identify and resolve license assignment errors see here. */
    public error_escaped?: string | undefined;
    /** The timestamp when the state of the license assignment was last updated. */
    public lastUpdatedDateTime?: Date | undefined;
    /** The unique identifier for the SKU. Read-Only. */
    public skuId?: string | undefined;
    /** Indicate the current state of this assignment. Read-Only. The possible values are Active, ActiveWithError, Disabled, and Error. */
    public state?: string | undefined;
    /**
     * Instantiates a new licenseAssignmentState and sets the default values.
     * @param licenseAssignmentStateParameterValue 
     */
    public constructor(licenseAssignmentStateParameterValue?: LicenseAssignmentState | undefined) {
        this.additionalData = licenseAssignmentStateParameterValue?.additionalData ? licenseAssignmentStateParameterValue?.additionalData! : {}
        this.assignedByGroup = licenseAssignmentStateParameterValue?.assignedByGroup ;
        this.disabledPlans = licenseAssignmentStateParameterValue?.disabledPlans ;
        this.error_escaped = licenseAssignmentStateParameterValue?.error_escaped ;
        this.lastUpdatedDateTime = licenseAssignmentStateParameterValue?.lastUpdatedDateTime ;
        this.skuId = licenseAssignmentStateParameterValue?.skuId ;
        this.state = licenseAssignmentStateParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignedByGroup": n => { this.assignedByGroup = n.getStringValue(); },
            "disabledPlans": n => { this.disabledPlans = n.getCollectionOfPrimitiveValues<string>(); },
            "error": n => { this.error_escaped = n.getStringValue(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "skuId": n => { this.skuId = n.getStringValue(); },
            "state": n => { this.state = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignedByGroup){
        writer.writeStringValue("assignedByGroup", this.assignedByGroup);
        }
        if(this.disabledPlans){
        writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", this.disabledPlans);
        }
        if(this.error_escaped){
        writer.writeStringValue("error", this.error_escaped);
        }
        if(this.lastUpdatedDateTime){
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        }
        if(this.skuId){
        writer.writeStringValue("skuId", this.skuId);
        }
        if(this.state){
        writer.writeStringValue("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
