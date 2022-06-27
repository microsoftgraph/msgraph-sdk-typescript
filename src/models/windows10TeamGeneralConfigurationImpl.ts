import {DeviceConfigurationImpl} from './index';
import {MiracastChannel} from './miracastChannel';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Windows10TeamGeneralConfiguration} from './windows10TeamGeneralConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class Windows10TeamGeneralConfigurationImpl extends DeviceConfigurationImpl implements Windows10TeamGeneralConfiguration {
    /** Indicates whether or not to Block Azure Operational Insights. */
    public azureOperationalInsightsBlockTelemetry?: boolean | undefined;
    /** The Azure Operational Insights workspace id. */
    public azureOperationalInsightsWorkspaceId?: string | undefined;
    /** The Azure Operational Insights Workspace key. */
    public azureOperationalInsightsWorkspaceKey?: string | undefined;
    /** Specifies whether to automatically launch the Connect app whenever a projection is initiated. */
    public connectAppBlockAutoLaunch?: boolean | undefined;
    /** Indicates whether or not to Block setting a maintenance window for device updates. */
    public maintenanceWindowBlocked?: boolean | undefined;
    /** Maintenance window duration for device updates. Valid values 0 to 5 */
    public maintenanceWindowDurationInHours?: number | undefined;
    /** Maintenance window start time for device updates. */
    public maintenanceWindowStartTime?: TimeOnly | undefined;
    /** Indicates whether or not to Block wireless projection. */
    public miracastBlocked?: boolean | undefined;
    /** The channel. Possible values are: userDefined, one, two, three, four, five, six, seven, eight, nine, ten, eleven, thirtySix, forty, fortyFour, fortyEight, oneHundredFortyNine, oneHundredFiftyThree, oneHundredFiftySeven, oneHundredSixtyOne, oneHundredSixtyFive. */
    public miracastChannel?: MiracastChannel | undefined;
    /** Indicates whether or not to require a pin for wireless projection. */
    public miracastRequirePin?: boolean | undefined;
    /** Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's meetings and files from Office 365. */
    public settingsBlockMyMeetingsAndFiles?: boolean | undefined;
    /** Specifies whether to allow the ability to resume a session when the session times out. */
    public settingsBlockSessionResume?: boolean | undefined;
    /** Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings. */
    public settingsBlockSigninSuggestions?: boolean | undefined;
    /** Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to 100 */
    public settingsDefaultVolume?: number | undefined;
    /** Specifies the number of minutes until the Hub screen turns off. */
    public settingsScreenTimeoutInMinutes?: number | undefined;
    /** Specifies the number of minutes until the session times out. */
    public settingsSessionTimeoutInMinutes?: number | undefined;
    /** Specifies the number of minutes until the Hub enters sleep mode. */
    public settingsSleepTimeoutInMinutes?: number | undefined;
    /** The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image. */
    public welcomeScreenBackgroundImageUrl?: string | undefined;
    /** Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room. */
    public welcomeScreenBlockAutomaticWakeUp?: boolean | undefined;
    /** The welcome screen meeting information shown. Possible values are: userDefined, showOrganizerAndTimeOnly, showOrganizerAndTimeAndSubject. */
    public welcomeScreenMeetingInformation?: WelcomeScreenMeetingInformation | undefined;
    /**
     * Instantiates a new Windows10TeamGeneralConfiguration and sets the default values.
     * @param windows10TeamGeneralConfigurationParameterValue 
     */
    public constructor(windows10TeamGeneralConfigurationParameterValue?: Windows10TeamGeneralConfiguration | undefined) {
        super(windows10TeamGeneralConfigurationParameterValue);
        this.azureOperationalInsightsBlockTelemetry = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsBlockTelemetry;
        this.azureOperationalInsightsWorkspaceId = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsWorkspaceId;
        this.azureOperationalInsightsWorkspaceKey = windows10TeamGeneralConfigurationParameterValue?.azureOperationalInsightsWorkspaceKey;
        this.connectAppBlockAutoLaunch = windows10TeamGeneralConfigurationParameterValue?.connectAppBlockAutoLaunch;
        this.maintenanceWindowBlocked = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowBlocked;
        this.maintenanceWindowDurationInHours = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowDurationInHours;
        this.maintenanceWindowStartTime = windows10TeamGeneralConfigurationParameterValue?.maintenanceWindowStartTime;
        this.miracastBlocked = windows10TeamGeneralConfigurationParameterValue?.miracastBlocked;
        this.miracastChannel = windows10TeamGeneralConfigurationParameterValue?.miracastChannel;
        this.miracastRequirePin = windows10TeamGeneralConfigurationParameterValue?.miracastRequirePin;
        this.settingsBlockMyMeetingsAndFiles = windows10TeamGeneralConfigurationParameterValue?.settingsBlockMyMeetingsAndFiles;
        this.settingsBlockSessionResume = windows10TeamGeneralConfigurationParameterValue?.settingsBlockSessionResume;
        this.settingsBlockSigninSuggestions = windows10TeamGeneralConfigurationParameterValue?.settingsBlockSigninSuggestions;
        this.settingsDefaultVolume = windows10TeamGeneralConfigurationParameterValue?.settingsDefaultVolume;
        this.settingsScreenTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsScreenTimeoutInMinutes;
        this.settingsSessionTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsSessionTimeoutInMinutes;
        this.settingsSleepTimeoutInMinutes = windows10TeamGeneralConfigurationParameterValue?.settingsSleepTimeoutInMinutes;
        this.welcomeScreenBackgroundImageUrl = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenBackgroundImageUrl;
        this.welcomeScreenBlockAutomaticWakeUp = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenBlockAutomaticWakeUp;
        this.welcomeScreenMeetingInformation = windows10TeamGeneralConfigurationParameterValue?.welcomeScreenMeetingInformation;
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
}
