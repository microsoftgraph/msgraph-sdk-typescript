import {createShiftPreferencesFromDiscriminatorValue} from './createShiftPreferencesFromDiscriminatorValue';
import {Entity, ShiftPreferences} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSettings extends Entity implements Parsable {
    /** The contributionToContentDiscoveryAsOrganizationDisabled property */
    private _contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** The contributionToContentDiscoveryDisabled property */
    private _contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The shiftPreferences property */
    private _shiftPreferences?: ShiftPreferences | undefined;
    /**
     * Instantiates a new userSettings and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.userSettings";
    };
    /**
     * Gets the contributionToContentDiscoveryAsOrganizationDisabled property value. The contributionToContentDiscoveryAsOrganizationDisabled property
     * @returns a boolean
     */
    public get contributionToContentDiscoveryAsOrganizationDisabled() {
        return this._contributionToContentDiscoveryAsOrganizationDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryAsOrganizationDisabled property value. The contributionToContentDiscoveryAsOrganizationDisabled property
     * @param value Value to set for the contributionToContentDiscoveryAsOrganizationDisabled property.
     */
    public set contributionToContentDiscoveryAsOrganizationDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryAsOrganizationDisabled = value;
    };
    /**
     * Gets the contributionToContentDiscoveryDisabled property value. The contributionToContentDiscoveryDisabled property
     * @returns a boolean
     */
    public get contributionToContentDiscoveryDisabled() {
        return this._contributionToContentDiscoveryDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryDisabled property value. The contributionToContentDiscoveryDisabled property
     * @param value Value to set for the contributionToContentDiscoveryDisabled property.
     */
    public set contributionToContentDiscoveryDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryDisabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contributionToContentDiscoveryAsOrganizationDisabled": n => { this.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); },
            "contributionToContentDiscoveryDisabled": n => { this.contributionToContentDiscoveryDisabled = n.getBooleanValue(); },
            "shiftPreferences": n => { this.shiftPreferences = n.getObjectValue<ShiftPreferences>(createShiftPreferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", this.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", this.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue<ShiftPreferences>("shiftPreferences", this.shiftPreferences);
    };
    /**
     * Gets the shiftPreferences property value. The shiftPreferences property
     * @returns a shiftPreferences
     */
    public get shiftPreferences() {
        return this._shiftPreferences;
    };
    /**
     * Sets the shiftPreferences property value. The shiftPreferences property
     * @param value Value to set for the shiftPreferences property.
     */
    public set shiftPreferences(value: ShiftPreferences | undefined) {
        this._shiftPreferences = value;
    };
}
