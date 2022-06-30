import {DeviceConfigurationImpl} from './index';
import {MiracastChannel} from './miracastChannel';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Windows10TeamGeneralConfiguration} from './windows10TeamGeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class Windows10TeamGeneralConfigurationImpl extends DeviceConfigurationImpl implements Windows10TeamGeneralConfiguration {
    /** Indicates whether or not to Block Azure Operational Insights. */
    private _azureOperationalInsightsBlockTelemetry?: boolean | undefined;
    /** The Azure Operational Insights workspace id. */
    private _azureOperationalInsightsWorkspaceId?: string | undefined;
    /** The Azure Operational Insights Workspace key. */
    private _azureOperationalInsightsWorkspaceKey?: string | undefined;
    /** Specifies whether to automatically launch the Connect app whenever a projection is initiated. */
    private _connectAppBlockAutoLaunch?: boolean | undefined;
    /** Indicates whether or not to Block setting a maintenance window for device updates. */
    private _maintenanceWindowBlocked?: boolean | undefined;
    /** Maintenance window duration for device updates. Valid values 0 to 5 */
    private _maintenanceWindowDurationInHours?: number | undefined;
    /** Maintenance window start time for device updates. */
    private _maintenanceWindowStartTime?: TimeOnly | undefined;
    /** Indicates whether or not to Block wireless projection. */
    private _miracastBlocked?: boolean | undefined;
    /** The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven, thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven, oneHundredSixtyOne, oneHundredSixtyFive. */
    private _miracastChannel?: MiracastChannel | undefined;
    /** Indicates whether or not to require a pin for wireless projection. */
    private _miracastRequirePin?: boolean | undefined;
    /** Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's meetings and files from Office 365. */
    private _settingsBlockMyMeetingsAndFiles?: boolean | undefined;
    /** Specifies whether to allow the ability to resume a session when the session times out. */
    private _settingsBlockSessionResume?: boolean | undefined;
    /** Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings. */
    private _settingsBlockSigninSuggestions?: boolean | undefined;
    /** Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to 100 */
    private _settingsDefaultVolume?: number | undefined;
    /** Specifies the number of minutes until the Hub screen turns off. */
    private _settingsScreenTimeoutInMinutes?: number | undefined;
    /** Specifies the number of minutes until the session times out. */
    private _settingsSessionTimeoutInMinutes?: number | undefined;
    /** Specifies the number of minutes until the Hub enters sleep mode. */
    private _settingsSleepTimeoutInMinutes?: number | undefined;
    /** The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image. */
    private _welcomeScreenBackgroundImageUrl?: string | undefined;
    /** Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room. */
    private _welcomeScreenBlockAutomaticWakeUp?: boolean | undefined;
    /** The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly, showOrganizerAndTimeAndSubject. */
    private _welcomeScreenMeetingInformation?: WelcomeScreenMeetingInformation | undefined;
    /**
     * Gets the azureOperationalInsightsBlockTelemetry property value. Indicates whether or not to Block Azure Operational Insights.
     * @returns a boolean
     */
    public get azureOperationalInsightsBlockTelemetry() {
        return this._azureOperationalInsightsBlockTelemetry;
    };
    /**
     * Sets the azureOperationalInsightsBlockTelemetry property value. Indicates whether or not to Block Azure Operational Insights.
     * @param value Value to set for the azureOperationalInsightsBlockTelemetry property.
     */
    public set azureOperationalInsightsBlockTelemetry(value: boolean | undefined) {
        if(value) {
            this._azureOperationalInsightsBlockTelemetry = value;
        }
    };
    /**
     * Gets the azureOperationalInsightsWorkspaceId property value. The Azure Operational Insights workspace id.
     * @returns a string
     */
    public get azureOperationalInsightsWorkspaceId() {
        return this._azureOperationalInsightsWorkspaceId;
    };
    /**
     * Sets the azureOperationalInsightsWorkspaceId property value. The Azure Operational Insights workspace id.
     * @param value Value to set for the azureOperationalInsightsWorkspaceId property.
     */
    public set azureOperationalInsightsWorkspaceId(value: string | undefined) {
        if(value) {
            this._azureOperationalInsightsWorkspaceId = value;
        }
    };
    /**
     * Gets the azureOperationalInsightsWorkspaceKey property value. The Azure Operational Insights Workspace key.
     * @returns a string
     */
    public get azureOperationalInsightsWorkspaceKey() {
        return this._azureOperationalInsightsWorkspaceKey;
    };
    /**
     * Sets the azureOperationalInsightsWorkspaceKey property value. The Azure Operational Insights Workspace key.
     * @param value Value to set for the azureOperationalInsightsWorkspaceKey property.
     */
    public set azureOperationalInsightsWorkspaceKey(value: string | undefined) {
        if(value) {
            this._azureOperationalInsightsWorkspaceKey = value;
        }
    };
    /**
     * Gets the connectAppBlockAutoLaunch property value. Specifies whether to automatically launch the Connect app whenever a projection is initiated.
     * @returns a boolean
     */
    public get connectAppBlockAutoLaunch() {
        return this._connectAppBlockAutoLaunch;
    };
    /**
     * Sets the connectAppBlockAutoLaunch property value. Specifies whether to automatically launch the Connect app whenever a projection is initiated.
     * @param value Value to set for the connectAppBlockAutoLaunch property.
     */
    public set connectAppBlockAutoLaunch(value: boolean | undefined) {
        if(value) {
            this._connectAppBlockAutoLaunch = value;
        }
    };
    /**
     * Instantiates a new Windows10TeamGeneralConfiguration and sets the default values.
     * @param windows10TeamGeneralConfigurationParameterValue 
     */
    public constructor(windows10TeamGeneralConfigurationParameterValue?: Windows10TeamGeneralConfiguration | undefined) {
        super(windows10TeamGeneralConfigurationParameterValue);
        this._azureOperationalInsightsBlockTelemetry = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsBlockTelemetry;
        this._azureOperationalInsightsWorkspaceId = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsWorkspaceId;
        this._azureOperationalInsightsWorkspaceKey = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsWorkspaceKey;
        this._connectAppBlockAutoLaunch = windows10TeamGeneralConfigurationParameterValue?.connectAppBlockAutoLaunch;
        this._maintenanceWindowBlocked = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowBlocked;
        this._maintenanceWindowDurationInHours = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowDurationInHours;
        this._maintenanceWindowStartTime = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowStartTime;
        this._miracastBlocked = windows10TeamGeneralConfigurationParameterValue?.miracastBlocked;
        this._miracastChannel = windows10TeamGeneralConfigurationParameterValue?.miracastChannel;
        this._miracastRequirePin = windows10TeamGeneralConfigurationParameterValue?.miracastRequirePin;
        this._settingsBlockMyMeetingsAndFiles = windows10TeamGeneralConfigurationParameterValue?.settingsBlockMyMeetingsAndFiles;
        this._settingsBlockSessionResume = windows10TeamGeneralConfigurationParameterValue?.settingsBlockSessionResume;
        this._settingsBlockSigninSuggestions = windows10TeamGeneralConfigurationParameterValue?.settingsBlockSigninSuggestions;
        this._settingsDefaultVolume = windows10TeamGeneralConfigurationParameterValue?.settingsDefaultVolume;
        this._settingsScreenTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsScreenTimeoutInMinutes;
        this._settingsSessionTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsSessionTimeoutInMinutes;
        this._settingsSleepTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsSleepTimeoutInMinutes;
        this._welcomeScreenBackgroundImageUrl = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenBackgroundImageUrl;
        this._welcomeScreenBlockAutomaticWakeUp = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenBlockAutomaticWakeUp;
        this._welcomeScreenMeetingInformation = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenMeetingInformation;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "azureOperationalInsightsBlockTelemetry": n => { this.azureOperationalInsightsBlockTelemetry = n.getBooleanValue(); },
            "azureOperationalInsightsWorkspaceId": n => { this.azureOperationalInsightsWorkspaceId = n.getStringValue(); },
            "azureOperationalInsightsWorkspaceKey": n => { this.azureOperationalInsightsWorkspaceKey = n.getStringValue(); },
            "connectAppBlockAutoLaunch": n => { this.connectAppBlockAutoLaunch = n.getBooleanValue(); },
            "maintenanceWindowBlocked": n => { this.maintenanceWindowBlocked = n.getBooleanValue(); },
            "maintenanceWindowDurationInHours": n => { this.maintenanceWindowDurationInHours = n.getNumberValue(); },
            "maintenanceWindowStartTime": n => { this.maintenanceWindowStartTime = n.getTimeOnlyValue(); },
            "miracastBlocked": n => { this.miracastBlocked = n.getBooleanValue(); },
            "miracastChannel": n => { this.miracastChannel = n.getEnumValue<MiracastChannel>(MiracastChannel); },
            "miracastRequirePin": n => { this.miracastRequirePin = n.getBooleanValue(); },
            "settingsBlockMyMeetingsAndFiles": n => { this.settingsBlockMyMeetingsAndFiles = n.getBooleanValue(); },
            "settingsBlockSessionResume": n => { this.settingsBlockSessionResume = n.getBooleanValue(); },
            "settingsBlockSigninSuggestions": n => { this.settingsBlockSigninSuggestions = n.getBooleanValue(); },
            "settingsDefaultVolume": n => { this.settingsDefaultVolume = n.getNumberValue(); },
            "settingsScreenTimeoutInMinutes": n => { this.settingsScreenTimeoutInMinutes = n.getNumberValue(); },
            "settingsSessionTimeoutInMinutes": n => { this.settingsSessionTimeoutInMinutes = n.getNumberValue(); },
            "settingsSleepTimeoutInMinutes": n => { this.settingsSleepTimeoutInMinutes = n.getNumberValue(); },
            "welcomeScreenBackgroundImageUrl": n => { this.welcomeScreenBackgroundImageUrl = n.getStringValue(); },
            "welcomeScreenBlockAutomaticWakeUp": n => { this.welcomeScreenBlockAutomaticWakeUp = n.getBooleanValue(); },
            "welcomeScreenMeetingInformation": n => { this.welcomeScreenMeetingInformation = n.getEnumValue<WelcomeScreenMeetingInformation>(WelcomeScreenMeetingInformation); },
        };
    };
    /**
     * Gets the maintenanceWindowBlocked property value. Indicates whether or not to Block setting a maintenance window for device updates.
     * @returns a boolean
     */
    public get maintenanceWindowBlocked() {
        return this._maintenanceWindowBlocked;
    };
    /**
     * Sets the maintenanceWindowBlocked property value. Indicates whether or not to Block setting a maintenance window for device updates.
     * @param value Value to set for the maintenanceWindowBlocked property.
     */
    public set maintenanceWindowBlocked(value: boolean | undefined) {
        if(value) {
            this._maintenanceWindowBlocked = value;
        }
    };
    /**
     * Gets the maintenanceWindowDurationInHours property value. Maintenance window duration for device updates. Valid values 0 to 5
     * @returns a integer
     */
    public get maintenanceWindowDurationInHours() {
        return this._maintenanceWindowDurationInHours;
    };
    /**
     * Sets the maintenanceWindowDurationInHours property value. Maintenance window duration for device updates. Valid values 0 to 5
     * @param value Value to set for the maintenanceWindowDurationInHours property.
     */
    public set maintenanceWindowDurationInHours(value: number | undefined) {
        if(value) {
            this._maintenanceWindowDurationInHours = value;
        }
    };
    /**
     * Gets the maintenanceWindowStartTime property value. Maintenance window start time for device updates.
     * @returns a TimeOnly
     */
    public get maintenanceWindowStartTime() {
        return this._maintenanceWindowStartTime;
    };
    /**
     * Sets the maintenanceWindowStartTime property value. Maintenance window start time for device updates.
     * @param value Value to set for the maintenanceWindowStartTime property.
     */
    public set maintenanceWindowStartTime(value: TimeOnly | undefined) {
        if(value) {
            this._maintenanceWindowStartTime = value;
        }
    };
    /**
     * Gets the miracastBlocked property value. Indicates whether or not to Block wireless projection.
     * @returns a boolean
     */
    public get miracastBlocked() {
        return this._miracastBlocked;
    };
    /**
     * Sets the miracastBlocked property value. Indicates whether or not to Block wireless projection.
     * @param value Value to set for the miracastBlocked property.
     */
    public set miracastBlocked(value: boolean | undefined) {
        if(value) {
            this._miracastBlocked = value;
        }
    };
    /**
     * Gets the miracastChannel property value. The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven, thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven, oneHundredSixtyOne, oneHundredSixtyFive.
     * @returns a miracastChannel
     */
    public get miracastChannel() {
        return this._miracastChannel;
    };
    /**
     * Sets the miracastChannel property value. The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven, thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven, oneHundredSixtyOne, oneHundredSixtyFive.
     * @param value Value to set for the miracastChannel property.
     */
    public set miracastChannel(value: MiracastChannel | undefined) {
        if(value) {
            this._miracastChannel = value;
        }
    };
    /**
     * Gets the miracastRequirePin property value. Indicates whether or not to require a pin for wireless projection.
     * @returns a boolean
     */
    public get miracastRequirePin() {
        return this._miracastRequirePin;
    };
    /**
     * Sets the miracastRequirePin property value. Indicates whether or not to require a pin for wireless projection.
     * @param value Value to set for the miracastRequirePin property.
     */
    public set miracastRequirePin(value: boolean | undefined) {
        if(value) {
            this._miracastRequirePin = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.azureOperationalInsightsBlockTelemetry){
            writer.writeBooleanValue("azureOperationalInsightsBlockTelemetry", this.azureOperationalInsightsBlockTelemetry);
        }
        if(this.azureOperationalInsightsWorkspaceId){
            writer.writeStringValue("azureOperationalInsightsWorkspaceId", this.azureOperationalInsightsWorkspaceId);
        }
        if(this.azureOperationalInsightsWorkspaceKey){
            writer.writeStringValue("azureOperationalInsightsWorkspaceKey", this.azureOperationalInsightsWorkspaceKey);
        }
        if(this.connectAppBlockAutoLaunch){
            writer.writeBooleanValue("connectAppBlockAutoLaunch", this.connectAppBlockAutoLaunch);
        }
        if(this.maintenanceWindowBlocked){
            writer.writeBooleanValue("maintenanceWindowBlocked", this.maintenanceWindowBlocked);
        }
        if(this.maintenanceWindowDurationInHours){
            writer.writeNumberValue("maintenanceWindowDurationInHours", this.maintenanceWindowDurationInHours);
        }
        if(this.maintenanceWindowStartTime){
            writer.writeTimeOnlyValue("maintenanceWindowStartTime", this.maintenanceWindowStartTime);
        }
        if(this.miracastBlocked){
            writer.writeBooleanValue("miracastBlocked", this.miracastBlocked);
        }
        if(this.miracastChannel){
            writer.writeEnumValue<MiracastChannel>("miracastChannel", this.miracastChannel);
        }
        if(this.miracastRequirePin){
            writer.writeBooleanValue("miracastRequirePin", this.miracastRequirePin);
        }
        if(this.settingsBlockMyMeetingsAndFiles){
            writer.writeBooleanValue("settingsBlockMyMeetingsAndFiles", this.settingsBlockMyMeetingsAndFiles);
        }
        if(this.settingsBlockSessionResume){
            writer.writeBooleanValue("settingsBlockSessionResume", this.settingsBlockSessionResume);
        }
        if(this.settingsBlockSigninSuggestions){
            writer.writeBooleanValue("settingsBlockSigninSuggestions", this.settingsBlockSigninSuggestions);
        }
        if(this.settingsDefaultVolume){
            writer.writeNumberValue("settingsDefaultVolume", this.settingsDefaultVolume);
        }
        if(this.settingsScreenTimeoutInMinutes){
            writer.writeNumberValue("settingsScreenTimeoutInMinutes", this.settingsScreenTimeoutInMinutes);
        }
        if(this.settingsSessionTimeoutInMinutes){
            writer.writeNumberValue("settingsSessionTimeoutInMinutes", this.settingsSessionTimeoutInMinutes);
        }
        if(this.settingsSleepTimeoutInMinutes){
            writer.writeNumberValue("settingsSleepTimeoutInMinutes", this.settingsSleepTimeoutInMinutes);
        }
        if(this.welcomeScreenBackgroundImageUrl){
            writer.writeStringValue("welcomeScreenBackgroundImageUrl", this.welcomeScreenBackgroundImageUrl);
        }
        if(this.welcomeScreenBlockAutomaticWakeUp){
            writer.writeBooleanValue("welcomeScreenBlockAutomaticWakeUp", this.welcomeScreenBlockAutomaticWakeUp);
        }
        if(this.welcomeScreenMeetingInformation){
            writer.writeEnumValue<WelcomeScreenMeetingInformation>("welcomeScreenMeetingInformation", this.welcomeScreenMeetingInformation);
        }
    };
    /**
     * Gets the settingsBlockMyMeetingsAndFiles property value. Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's meetings and files from Office 365.
     * @returns a boolean
     */
    public get settingsBlockMyMeetingsAndFiles() {
        return this._settingsBlockMyMeetingsAndFiles;
    };
    /**
     * Sets the settingsBlockMyMeetingsAndFiles property value. Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's meetings and files from Office 365.
     * @param value Value to set for the settingsBlockMyMeetingsAndFiles property.
     */
    public set settingsBlockMyMeetingsAndFiles(value: boolean | undefined) {
        if(value) {
            this._settingsBlockMyMeetingsAndFiles = value;
        }
    };
    /**
     * Gets the settingsBlockSessionResume property value. Specifies whether to allow the ability to resume a session when the session times out.
     * @returns a boolean
     */
    public get settingsBlockSessionResume() {
        return this._settingsBlockSessionResume;
    };
    /**
     * Sets the settingsBlockSessionResume property value. Specifies whether to allow the ability to resume a session when the session times out.
     * @param value Value to set for the settingsBlockSessionResume property.
     */
    public set settingsBlockSessionResume(value: boolean | undefined) {
        if(value) {
            this._settingsBlockSessionResume = value;
        }
    };
    /**
     * Gets the settingsBlockSigninSuggestions property value. Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings.
     * @returns a boolean
     */
    public get settingsBlockSigninSuggestions() {
        return this._settingsBlockSigninSuggestions;
    };
    /**
     * Sets the settingsBlockSigninSuggestions property value. Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings.
     * @param value Value to set for the settingsBlockSigninSuggestions property.
     */
    public set settingsBlockSigninSuggestions(value: boolean | undefined) {
        if(value) {
            this._settingsBlockSigninSuggestions = value;
        }
    };
    /**
     * Gets the settingsDefaultVolume property value. Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to 100
     * @returns a integer
     */
    public get settingsDefaultVolume() {
        return this._settingsDefaultVolume;
    };
    /**
     * Sets the settingsDefaultVolume property value. Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to 100
     * @param value Value to set for the settingsDefaultVolume property.
     */
    public set settingsDefaultVolume(value: number | undefined) {
        if(value) {
            this._settingsDefaultVolume = value;
        }
    };
    /**
     * Gets the settingsScreenTimeoutInMinutes property value. Specifies the number of minutes until the Hub screen turns off.
     * @returns a integer
     */
    public get settingsScreenTimeoutInMinutes() {
        return this._settingsScreenTimeoutInMinutes;
    };
    /**
     * Sets the settingsScreenTimeoutInMinutes property value. Specifies the number of minutes until the Hub screen turns off.
     * @param value Value to set for the settingsScreenTimeoutInMinutes property.
     */
    public set settingsScreenTimeoutInMinutes(value: number | undefined) {
        if(value) {
            this._settingsScreenTimeoutInMinutes = value;
        }
    };
    /**
     * Gets the settingsSessionTimeoutInMinutes property value. Specifies the number of minutes until the session times out.
     * @returns a integer
     */
    public get settingsSessionTimeoutInMinutes() {
        return this._settingsSessionTimeoutInMinutes;
    };
    /**
     * Sets the settingsSessionTimeoutInMinutes property value. Specifies the number of minutes until the session times out.
     * @param value Value to set for the settingsSessionTimeoutInMinutes property.
     */
    public set settingsSessionTimeoutInMinutes(value: number | undefined) {
        if(value) {
            this._settingsSessionTimeoutInMinutes = value;
        }
    };
    /**
     * Gets the settingsSleepTimeoutInMinutes property value. Specifies the number of minutes until the Hub enters sleep mode.
     * @returns a integer
     */
    public get settingsSleepTimeoutInMinutes() {
        return this._settingsSleepTimeoutInMinutes;
    };
    /**
     * Sets the settingsSleepTimeoutInMinutes property value. Specifies the number of minutes until the Hub enters sleep mode.
     * @param value Value to set for the settingsSleepTimeoutInMinutes property.
     */
    public set settingsSleepTimeoutInMinutes(value: number | undefined) {
        if(value) {
            this._settingsSleepTimeoutInMinutes = value;
        }
    };
    /**
     * Gets the welcomeScreenBackgroundImageUrl property value. The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image.
     * @returns a string
     */
    public get welcomeScreenBackgroundImageUrl() {
        return this._welcomeScreenBackgroundImageUrl;
    };
    /**
     * Sets the welcomeScreenBackgroundImageUrl property value. The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image.
     * @param value Value to set for the welcomeScreenBackgroundImageUrl property.
     */
    public set welcomeScreenBackgroundImageUrl(value: string | undefined) {
        if(value) {
            this._welcomeScreenBackgroundImageUrl = value;
        }
    };
    /**
     * Gets the welcomeScreenBlockAutomaticWakeUp property value. Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room.
     * @returns a boolean
     */
    public get welcomeScreenBlockAutomaticWakeUp() {
        return this._welcomeScreenBlockAutomaticWakeUp;
    };
    /**
     * Sets the welcomeScreenBlockAutomaticWakeUp property value. Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room.
     * @param value Value to set for the welcomeScreenBlockAutomaticWakeUp property.
     */
    public set welcomeScreenBlockAutomaticWakeUp(value: boolean | undefined) {
        if(value) {
            this._welcomeScreenBlockAutomaticWakeUp = value;
        }
    };
    /**
     * Gets the welcomeScreenMeetingInformation property value. The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly, showOrganizerAndTimeAndSubject.
     * @returns a welcomeScreenMeetingInformation
     */
    public get welcomeScreenMeetingInformation() {
        return this._welcomeScreenMeetingInformation;
    };
    /**
     * Sets the welcomeScreenMeetingInformation property value. The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly, showOrganizerAndTimeAndSubject.
     * @param value Value to set for the welcomeScreenMeetingInformation property.
     */
    public set welcomeScreenMeetingInformation(value: WelcomeScreenMeetingInformation | undefined) {
        if(value) {
            this._welcomeScreenMeetingInformation = value;
        }
    };
}
