import {DeviceAndAppManagementAssignmentTarget, DeviceAppManagementMember1, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains the properties used to assign an MDM app configuration to a group. */
export class ManagedDeviceMobileAppConfigurationAssignment extends Entity implements Parsable {
    /** Assignment target that the T&C policy is assigned to. */
    private _target?: DeviceAndAppManagementAssignmentTarget | DeviceAppManagementMember1 | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfigurationAssignment and sets the default values.
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
     * Gets the target property value. Assignment target that the T&C policy is assigned to.
     * @returns a deviceAppManagement
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Assignment target that the T&C policy is assigned to.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | DeviceAppManagementMember1 | undefined) {
        this._target = value;
    };
}
