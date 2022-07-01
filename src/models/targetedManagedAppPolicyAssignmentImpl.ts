import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The type for deployment of groups or apps. */
export class TargetedManagedAppPolicyAssignmentImpl extends EntityImpl implements TargetedManagedAppPolicyAssignment {
    /** Identifier for deployment to a group or app */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new targetedManagedAppPolicyAssignment and sets the default values.
     * @param targetedManagedAppPolicyAssignmentParameterValue 
     */
    public constructor(targetedManagedAppPolicyAssignmentParameterValue?: TargetedManagedAppPolicyAssignment | undefined) {
        super(targetedManagedAppPolicyAssignmentParameterValue);
        this._target = targetedManagedAppPolicyAssignmentParameterValue?.target;
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
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", (this.target instanceof DeviceAndAppManagementAssignmentTargetImpl? this.target as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(this.target)));
        }
    };
    /**
     * Gets the target property value. Identifier for deployment to a group or app
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Identifier for deployment to a group or app
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
