import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains the properties used to assign an MDM app configuration to a group. */
export class ManagedDeviceMobileAppConfigurationAssignmentImpl extends EntityImpl implements ManagedDeviceMobileAppConfigurationAssignment {
    /** Assignment target that the T&C policy is assigned to. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfigurationAssignment and sets the default values.
     * @param managedDeviceMobileAppConfigurationAssignmentParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationAssignmentParameterValue?: ManagedDeviceMobileAppConfigurationAssignment | undefined) {
        super(managedDeviceMobileAppConfigurationAssignmentParameterValue);
        this._target = managedDeviceMobileAppConfigurationAssignmentParameterValue?.target;
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
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", (!this.target || this.target instanceof DeviceAndAppManagementAssignmentTargetImpl? this.target : new DeviceAndAppManagementAssignmentTargetImpl(this.target)));
        }
    };
    /**
     * Gets the target property value. Assignment target that the T&C policy is assigned to.
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Assignment target that the T&C policy is assigned to.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value : new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
