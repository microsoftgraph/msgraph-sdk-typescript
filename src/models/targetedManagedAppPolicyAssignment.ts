import {AdminMember1, DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The type for deployment of groups or apps. */
export class TargetedManagedAppPolicyAssignment extends Entity implements Parsable {
    /** Identifier for deployment to a group or app */
    private _target?: DeviceAndAppManagementAssignmentTarget | AdminMember1 | undefined;
    /**
     * Instantiates a new targetedManagedAppPolicyAssignment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Gets the target property value. Identifier for deployment to a group or app
     * @returns a admin
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Identifier for deployment to a group or app
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | AdminMember1 | undefined) {
        this._target = value;
    };
}
