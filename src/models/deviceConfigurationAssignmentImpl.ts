import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The device configuration assignment entity assigns an AAD group to a specific device configuration. */
export class DeviceConfigurationAssignmentImpl extends EntityImpl implements DeviceConfigurationAssignment, Parsable {
    /** The assignment target for the device configuration. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new deviceConfigurationAssignment and sets the default values.
     * @param deviceConfigurationAssignmentParameterValue 
     */
    public constructor(deviceConfigurationAssignmentParameterValue?: DeviceConfigurationAssignment | undefined) {
        super();
        this.target = deviceConfigurationAssignmentParameterValue?.target ;
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
