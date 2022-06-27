import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties describing restart coordination following an app installation. */
export class Win32LobAppRestartSettingsImpl implements Win32LobAppRestartSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The number of minutes before the restart time to display the countdown dialog for pending restarts. */
    public countdownDisplayBeforeRestartInMinutes?: number | undefined;
    /** The number of minutes to wait before restarting the device after an app installation. */
    public gracePeriodInMinutes?: number | undefined;
    /** The number of minutes to snooze the restart notification dialog when the snooze button is selected. */
    public restartNotificationSnoozeDurationInMinutes?: number | undefined;
    /**
     * Instantiates a new win32LobAppRestartSettings and sets the default values.
     * @param win32LobAppRestartSettingsParameterValue 
     */
    public constructor(win32LobAppRestartSettingsParameterValue?: Win32LobAppRestartSettings | undefined) {
        this.additionalData = win32LobAppRestartSettingsParameterValue?.additionalData ? win32LobAppRestartSettingsParameterValue?.additionalData! : {};
        this.countdownDisplayBeforeRestartInMinutes = win32LobAppRestartSettingsParameterValue?.countdownDisplayBeforeRestartInMinutes;
        this.gracePeriodInMinutes = win32LobAppRestartSettingsParameterValue?.gracePeriodInMinutes;
        this.restartNotificationSnoozeDurationInMinutes = win32LobAppRestartSettingsParameterValue?.restartNotificationSnoozeDurationInMinutes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countdownDisplayBeforeRestartInMinutes": n => { this.countdownDisplayBeforeRestartInMinutes = n.getNumberValue(); },
            "gracePeriodInMinutes": n => { this.gracePeriodInMinutes = n.getNumberValue(); },
            "restartNotificationSnoozeDurationInMinutes": n => { this.restartNotificationSnoozeDurationInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.countdownDisplayBeforeRestartInMinutes){
            writer.writeNumberValue("countdownDisplayBeforeRestartInMinutes", this.countdownDisplayBeforeRestartInMinutes);
        }
        if(this.gracePeriodInMinutes){
            writer.writeNumberValue("gracePeriodInMinutes", this.gracePeriodInMinutes);
        }
        if(this.restartNotificationSnoozeDurationInMinutes){
            writer.writeNumberValue("restartNotificationSnoozeDurationInMinutes", this.restartNotificationSnoozeDurationInMinutes);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
