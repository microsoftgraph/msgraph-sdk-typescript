import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties describing restart coordination following an app installation. */
export class Win32LobAppRestartSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The number of minutes before the restart time to display the countdown dialog for pending restarts. */
    private _countdownDisplayBeforeRestartInMinutes?: number | undefined;
    /** The number of minutes to wait before restarting the device after an app installation. */
    private _gracePeriodInMinutes?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The number of minutes to snooze the restart notification dialog when the snooze button is selected. */
    private _restartNotificationSnoozeDurationInMinutes?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new win32LobAppRestartSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the countdownDisplayBeforeRestartInMinutes property value. The number of minutes before the restart time to display the countdown dialog for pending restarts.
     * @returns a integer
     */
    public get countdownDisplayBeforeRestartInMinutes() {
        return this._countdownDisplayBeforeRestartInMinutes;
    };
    /**
     * Sets the countdownDisplayBeforeRestartInMinutes property value. The number of minutes before the restart time to display the countdown dialog for pending restarts.
     * @param value Value to set for the countdownDisplayBeforeRestartInMinutes property.
     */
    public set countdownDisplayBeforeRestartInMinutes(value: number | undefined) {
        this._countdownDisplayBeforeRestartInMinutes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "countdownDisplayBeforeRestartInMinutes": n => { this.countdownDisplayBeforeRestartInMinutes = n.getNumberValue(); },
            "gracePeriodInMinutes": n => { this.gracePeriodInMinutes = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "restartNotificationSnoozeDurationInMinutes": n => { this.restartNotificationSnoozeDurationInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Gets the gracePeriodInMinutes property value. The number of minutes to wait before restarting the device after an app installation.
     * @returns a integer
     */
    public get gracePeriodInMinutes() {
        return this._gracePeriodInMinutes;
    };
    /**
     * Sets the gracePeriodInMinutes property value. The number of minutes to wait before restarting the device after an app installation.
     * @param value Value to set for the gracePeriodInMinutes property.
     */
    public set gracePeriodInMinutes(value: number | undefined) {
        this._gracePeriodInMinutes = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the restartNotificationSnoozeDurationInMinutes property value. The number of minutes to snooze the restart notification dialog when the snooze button is selected.
     * @returns a integer
     */
    public get restartNotificationSnoozeDurationInMinutes() {
        return this._restartNotificationSnoozeDurationInMinutes;
    };
    /**
     * Sets the restartNotificationSnoozeDurationInMinutes property value. The number of minutes to snooze the restart notification dialog when the snooze button is selected.
     * @param value Value to set for the restartNotificationSnoozeDurationInMinutes property.
     */
    public set restartNotificationSnoozeDurationInMinutes(value: number | undefined) {
        this._restartNotificationSnoozeDurationInMinutes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("countdownDisplayBeforeRestartInMinutes", this.countdownDisplayBeforeRestartInMinutes);
        writer.writeNumberValue("gracePeriodInMinutes", this.gracePeriodInMinutes);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("restartNotificationSnoozeDurationInMinutes", this.restartNotificationSnoozeDurationInMinutes);
        writer.writeAdditionalData(this.additionalData);
    };
}
