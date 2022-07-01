import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {InstallIntent} from './installIntent';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties used to assign a eBook to a group. */
export class ManagedEBookAssignmentImpl extends EntityImpl implements ManagedEBookAssignment {
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    private _installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new managedEBookAssignment and sets the default values.
     * @param managedEBookAssignmentParameterValue 
     */
    public constructor(managedEBookAssignmentParameterValue?: ManagedEBookAssignment | undefined) {
        super(managedEBookAssignmentParameterValue);
        this._installIntent = managedEBookAssignmentParameterValue?.installIntent;
        this._target = managedEBookAssignmentParameterValue?.target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "installIntent": n => { this.installIntent = n.getEnumValue<InstallIntent>(InstallIntent); },
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTargetImpl>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
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
        if(value) {
            this._installIntent = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.installIntent){
            writer.writeEnumValue<InstallIntent>("installIntent", this.installIntent);
        }
        if(this.target){
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", (this.target instanceof DeviceAndAppManagementAssignmentTargetImpl? this.target as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(this.target)));
        }
    };
    /**
     * Gets the target property value. The assignment target for eBook.
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The assignment target for eBook.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
