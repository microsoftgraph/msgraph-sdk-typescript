import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device compliance policy assignment. */
export class DeviceCompliancePolicyAssignmentImpl extends EntityImpl implements DeviceCompliancePolicyAssignment, Parsable {
    /** Target for the compliance policy assignment. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new deviceCompliancePolicyAssignment and sets the default values.
     * @param deviceCompliancePolicyAssignmentParameterValue 
     */
    public constructor(deviceCompliancePolicyAssignmentParameterValue?: DeviceCompliancePolicyAssignment | undefined) {
        super();
        this.target = deviceCompliancePolicyAssignmentParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTargetImpl>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.target){
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", new DeviceAndAppManagementAssignmentTargetImpl(this.target));
        }
    };
}
