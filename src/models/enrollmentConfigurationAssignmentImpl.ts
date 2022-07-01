import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Enrollment Configuration Assignment */
export class EnrollmentConfigurationAssignmentImpl extends EntityImpl implements EnrollmentConfigurationAssignment {
    /** Represents an assignment to managed devices in the tenant */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new enrollmentConfigurationAssignment and sets the default values.
     * @param enrollmentConfigurationAssignmentParameterValue 
     */
    public constructor(enrollmentConfigurationAssignmentParameterValue?: EnrollmentConfigurationAssignment | undefined) {
        super(enrollmentConfigurationAssignmentParameterValue);
        this._target = enrollmentConfigurationAssignmentParameterValue?.target;
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
     * Gets the target property value. Represents an assignment to managed devices in the tenant
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Represents an assignment to managed devices in the tenant
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
