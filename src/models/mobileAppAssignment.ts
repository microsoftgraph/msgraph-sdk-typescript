import {createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue} from './createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue';
import {createMobileAppAssignmentSettingsFromDiscriminatorValue} from './createMobileAppAssignmentSettingsFromDiscriminatorValue';
import {DeviceAndAppManagementAssignmentTarget, Entity, MobileAppAssignmentSettings} from './index';
import {InstallIntent} from './installIntent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * A class containing the properties used for Group Assignment of a Mobile App.
 */
export class MobileAppAssignment extends Entity implements Parsable {
    /** Possible values for the install intent chosen by the admin. */
    private _intent?: InstallIntent | undefined;
    /** The settings for target assignment defined by the admin. */
    private _settings?: MobileAppAssignmentSettings | undefined;
    /** The target group assignment defined by the admin. */
    private _target?: DeviceAndAppManagementAssignmentTarget | undefined;
    /**
     * Instantiates a new mobileAppAssignment and sets the default values.
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
            "intent": n => { this.intent = n.getEnumValue<InstallIntent>(InstallIntent); },
            "settings": n => { this.settings = n.getObjectValue<MobileAppAssignmentSettings>(createMobileAppAssignmentSettingsFromDiscriminatorValue); },
            "target": n => { this.target = n.getObjectValue<DeviceAndAppManagementAssignmentTarget>(createDeviceAndAppManagementAssignmentTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the intent property value. Possible values for the install intent chosen by the admin.
     * @returns a installIntent
     */
    public get intent() {
        return this._intent;
    };
    /**
     * Sets the intent property value. Possible values for the install intent chosen by the admin.
     * @param value Value to set for the intent property.
     */
    public set intent(value: InstallIntent | undefined) {
        this._intent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<InstallIntent>("intent", this.intent);
        writer.writeObjectValue<MobileAppAssignmentSettings>("settings", this.settings);
        writer.writeObjectValue<DeviceAndAppManagementAssignmentTarget>("target", this.target);
    };
    /**
     * Gets the settings property value. The settings for target assignment defined by the admin.
     * @returns a mobileAppAssignmentSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings for target assignment defined by the admin.
     * @param value Value to set for the settings property.
     */
    public set settings(value: MobileAppAssignmentSettings | undefined) {
        this._settings = value;
    };
    /**
     * Gets the target property value. The target group assignment defined by the admin.
     * @returns a deviceAndAppManagementAssignmentTarget
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. The target group assignment defined by the admin.
     * @param value Value to set for the target property.
     */
    public set target(value: DeviceAndAppManagementAssignmentTarget | undefined) {
        this._target = value;
    };
}
