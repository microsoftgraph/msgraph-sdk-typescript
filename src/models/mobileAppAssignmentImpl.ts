import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {createMobileAppAssignmentSettingsFromDiscriminatorValue} from './createMobileAppAssignmentSettingsFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl, MobileAppAssignmentSettingsImpl} from './index';
import {InstallIntent} from './installIntent';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing the properties used for Group Assignment of a Mobile App. */
export class MobileAppAssignmentImpl extends EntityImpl implements MobileAppAssignment, Parsable {
    /** The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    public intent?: InstallIntent | undefined;
    /** The settings for target assignment defined by the admin. */
    public settings?: MobileAppAssignmentSettings | undefined;
    /** The target group assignment defined by the admin. */
    public target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new mobileAppAssignment and sets the default values.
     * @param mobileAppAssignmentParameterValue 
     */
    public constructor(mobileAppAssignmentParameterValue?: MobileAppAssignment | undefined) {
        super();
        this.intent = mobileAppAssignmentParameterValue?.intent ;
        this.settings = mobileAppAssignmentParameterValue?.settings ;
        this.target = mobileAppAssignmentParameterValue?.target ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "intent": n => { this.intent = n.getEnumValue<InstallIntent>(InstallIntent); },
            "settings": n => { this.settings = n.getObjectValue<MobileAppAssignmentSettingsImpl>(createMobileAppAssignmentSettingsFromDiscriminatorValue); },
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
        if(this.intent){
        writer.writeEnumValue<InstallIntent>("intent", this.intent);
        }
        if(this.settings){
        writer.writeObjectValue<MobileAppAssignmentSettingsImpl>("settings", new MobileAppAssignmentSettingsImpl(this.settings));
        }
        if(this.target){
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", new DeviceAndAppManagementAssignmentTargetImpl(this.target));
        }
    };
}
