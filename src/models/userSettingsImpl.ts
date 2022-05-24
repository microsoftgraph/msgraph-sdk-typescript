import {createShiftPreferencesFromDiscriminatorValue} from './createShiftPreferencesFromDiscriminatorValue';
import {EntityImpl, ShiftPreferencesImpl} from './index';
import {ShiftPreferences} from './shiftPreferences';
import {UserSettings} from './userSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class UserSettingsImpl extends EntityImpl implements Parsable, UserSettings {
    /** Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center. */
    public contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve. */
    public contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The shift preferences for the user. */
    public shiftPreferences?: ShiftPreferences | undefined;
    /**
     * Instantiates a new userSettings and sets the default values.
     * @param userSettingsParameterValue 
     */
    public constructor(userSettingsParameterValue?: UserSettings | undefined) {
        super();
        this.contributionToContentDiscoveryAsOrganizationDisabled = userSettingsParameterValue?.contributionToContentDiscoveryAsOrganizationDisabled ;
        this.contributionToContentDiscoveryDisabled = userSettingsParameterValue?.contributionToContentDiscoveryDisabled ;
        this.shiftPreferences = userSettingsParameterValue?.shiftPreferences ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contributionToContentDiscoveryAsOrganizationDisabled": n => { this.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); },
            "contributionToContentDiscoveryDisabled": n => { this.contributionToContentDiscoveryDisabled = n.getBooleanValue(); },
            "shiftPreferences": n => { this.shiftPreferences = n.getObjectValue<ShiftPreferencesImpl>(createShiftPreferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.contributionToContentDiscoveryAsOrganizationDisabled){
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", this.contributionToContentDiscoveryAsOrganizationDisabled);
        }
        if(this.contributionToContentDiscoveryDisabled){
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", this.contributionToContentDiscoveryDisabled);
        }
        if(this.shiftPreferences){
        writer.writeObjectValue<ShiftPreferencesImpl>("shiftPreferences", new ShiftPreferencesImpl(this.shiftPreferences));
        }
    };
}
