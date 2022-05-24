import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl} from './index';
import {InstallIntent} from './installIntent';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties used to assign a eBook to a group. */
export class ManagedEBookAssignmentImpl extends EntityImpl implements ManagedEBookAssignment, Parsable {
    /** The install intent for eBook. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    public installIntent?: InstallIntent | undefined;
    /** The assignment target for eBook. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new managedEBookAssignment and sets the default values.
     * @param managedEBookAssignmentParameterValue 
     */
    public constructor(managedEBookAssignmentParameterValue?: ManagedEBookAssignment | undefined) {
        super();
        this.installIntent = managedEBookAssignmentParameterValue?.installIntent ;
        this.target = managedEBookAssignmentParameterValue?.target ;
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
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", new DeviceAndAppManagementAssignmentTargetImpl(this.target));
        }
    };
}
