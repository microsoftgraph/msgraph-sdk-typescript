import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** User group targeting for Compliance Management Partner */
export class ComplianceManagementPartnerAssignmentImpl implements AdditionalDataHolder, ComplianceManagementPartnerAssignment, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Group assignment target. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new complianceManagementPartnerAssignment and sets the default values.
     * @param complianceManagementPartnerAssignmentParameterValue 
     */
    public constructor(complianceManagementPartnerAssignmentParameterValue?: ComplianceManagementPartnerAssignment | undefined) {
        this.additionalData = complianceManagementPartnerAssignmentParameterValue?.additionalData ? complianceManagementPartnerAssignmentParameterValue?.additionalData! : {}
        this.target = complianceManagementPartnerAssignmentParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTargetImpl>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.target){
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", new DeviceAndAppManagementAssignmentTargetImpl(this.target));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
