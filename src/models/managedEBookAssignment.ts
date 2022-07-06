import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget, Entity} from './index';
import {InstallIntent} from './installIntent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties used to assign a eBook to a group. */
export class ManagedEBookAssignment extends Entity implements Parsable {
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    private _installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Instantiates a new managedEBookAssignment and sets the default values.
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
            "installIntent": n => { this.installIntent = n.getEnumValue<InstallIntent>(InstallIntent); },
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
            "@odata.type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the installIntent property value. The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @returns a installIntent
     */
    public get installIntent() {
        return this._installIntent;
    };
    /**
     * Sets the installIntent property value. The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @param value Value to set for the installIntent property.
     */
    public set installIntent(value: InstallIntent | undefined) {
        this._installIntent = value;
    };
    /**
     * Gets the @odata.type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the @odata.type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
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
        writer.writeStringValue("@odata.type", this.type);
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
