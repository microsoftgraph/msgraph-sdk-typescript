import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Enrollment Configuration Assignment */
export class EnrollmentConfigurationAssignment extends Entity implements Parsable {
    /** Represents an assignment to managed devices in the tenant */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new enrollmentConfigurationAssignment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.enrollmentConfigurationAssignment";
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
     * Gets the target property value. Represents an assignment to managed devices in the tenant
     * @returns a deviceAndAppManagementAssignmentTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Represents an assignment to managed devices in the tenant
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
