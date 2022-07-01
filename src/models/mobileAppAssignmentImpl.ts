import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {createMobileAppAssignmentSettingsFromDiscriminatorValue} from './createMobileAppAssignmentSettingsFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget} from './deviceAndAppManagementAssignmentTarget';
import {DeviceAndAppManagementAssignmentTargetImpl, EntityImpl, MobileAppAssignmentSettingsImpl} from './index';
import {InstallIntent} from './installIntent';
import {MobileAppAssignment} from './mobileAppAssignment';
import {MobileAppAssignmentSettings} from './mobileAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing the properties used for Group Assignment of a Mobile App. */
export class MobileAppAssignmentImpl extends EntityImpl implements MobileAppAssignment {
    /** The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment. */
    private _intent?: InstallIntent | undefined;
    /** The settings for target assignment defined by the admin. */
    private _settings?: MobileAppAssignmentSettings | undefined;
    /** The target group assignment defined by the admin. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new mobileAppAssignment and sets the default values.
     * @param mobileAppAssignmentParameterValue 
     */
    public constructor(mobileAppAssignmentParameterValue?: MobileAppAssignment | undefined) {
        super(mobileAppAssignmentParameterValue);
        this._intent = mobileAppAssignmentParameterValue?.intent;
        this._settings = mobileAppAssignmentParameterValue?.settings;
        this._target = mobileAppAssignmentParameterValue?.target;
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
     * Gets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @returns a installIntent
     */
    public get intent() {
        return this._intent;
    };
    /**
     * Sets the intent property value. The install intent defined by the admin. Possible values are: available, required, uninstall, availableWithoutEnrollment.
     * @param value Value to set for the intent property.
     */
    public set intent(value: InstallIntent | undefined) {
        if(value) {
            this._intent = value;
        }
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
            writer.writeObjectValue<MobileAppAssignmentSettingsImpl>("settings", (this.settings instanceof MobileAppAssignmentSettingsImpl? this.settings as MobileAppAssignmentSettingsImpl: new MobileAppAssignmentSettingsImpl(this.settings)));
        }
        if(this.target){
            writer.writeObjectValue<DeviceAndAppManagementAssignmentTargetImpl>("target", (this.target instanceof DeviceAndAppManagementAssignmentTargetImpl? this.target as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(this.target)));
        }
    };
    /**
     * Gets the settings property value. The settings for target assignment defined by the admin.
     * @returns a MobileAppAssignmentSettingsInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings for target assignment defined by the admin.
     * @param value Value to set for the settings property.
     */
    public set settings(value: MobileAppAssignmentSettings | undefined) {
        if(value) {
            this._settings = value instanceof MobileAppAssignmentSettingsImpl? value as MobileAppAssignmentSettingsImpl: new MobileAppAssignmentSettingsImpl(value);
        }
    };
    /**
     * Gets the target property value. The target group assignment defined by the admin.
     * @returns a DeviceAndAppManagementAssignmentTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target group assignment defined by the admin.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        if(value) {
            this._target = value instanceof DeviceAndAppManagementAssignmentTargetImpl? value as DeviceAndAppManagementAssignmentTargetImpl: new DeviceAndAppManagementAssignmentTargetImpl(value);
        }
    };
}
