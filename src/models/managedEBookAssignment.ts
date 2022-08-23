import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {InstallIntent} from './installIntent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties used to assign a eBook to a group. */
export class ManagedEBookAssignment extends Entity implements Parsable {
    /** Possible values for the install intent chosen by the admin. */
    private _installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new managedEBookAssignment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.managedEBookAssignment";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "installIntent": n => { this.installIntent = n.getEnumValue<InstallIntent>(InstallIntent); },
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the installIntent property value. Possible values for the install intent chosen by the admin.
     * @returns a installIntent
     */
    public get installIntent() {
        return this._installIntent;
    };
    /**
     * Sets the installIntent property value. Possible values for the install intent chosen by the admin.
     * @param value Value to set for the installIntent property.
     */
    public set installIntent(value: InstallIntent | undefined) {
        this._installIntent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InstallIntent>("installIntent", this.installIntent);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Gets the target property value. The assignment target for eBook.
     * @returns a deviceAndAppManagementAssignmentTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The assignment target for eBook.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
