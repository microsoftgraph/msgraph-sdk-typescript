import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The type for deployment of groups or apps. */
export class TargetedManagedAppPolicyAssignmentImpl extends EntityImpl implements Parsable, TargetedManagedAppPolicyAssignment {
    /** Identifier for deployment to a group or app */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new targetedManagedAppPolicyAssignment and sets the default values.
     * @param targetedManagedAppPolicyAssignmentParameterValue 
     */
    public constructor(targetedManagedAppPolicyAssignmentParameterValue?: TargetedManagedAppPolicyAssignment | undefined) {
        super();
        this.target = targetedManagedAppPolicyAssignmentParameterValue?.target ;
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
