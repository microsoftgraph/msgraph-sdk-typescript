import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains properties used to determine when to offer an app to devices and when to install the app on devices.
 */
export class MobileAppInstallTimeSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The time at which the app should be installed. */
    private _deadlineDateTime?: Date | undefined;
    private _odataType?: string | undefined;
    /** The time at which the app should be available for installation. */
    private _startDateTime?: Date | undefined;
    /** Whether the local device time or UTC time should be used when determining the available and deadline times. */
    private _useLocalTime?: boolean | undefined;
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
     * Instantiates a new mobileAppInstallTimeSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deadlineDateTime property value. The time at which the app should be installed.
     * @returns a Date
     */
    public get deadlineDateTime() {
        return this._deadlineDateTime;
    };
    /**
     * Sets the deadlineDateTime property value. The time at which the app should be installed.
     * @param value Value to set for the deadlineDateTime property.
     */
    public set deadlineDateTime(value: Date | undefined) {
        this._deadlineDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deadlineDateTime": n => { this.deadlineDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "useLocalTime": n => { this.useLocalTime = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("deadlineDateTime", this.deadlineDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeBooleanValue("useLocalTime", this.useLocalTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The time at which the app should be available for installation.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The time at which the app should be available for installation.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the useLocalTime property value. Whether the local device time or UTC time should be used when determining the available and deadline times.
     * @returns a boolean
     */
    public get useLocalTime() {
        return this._useLocalTime;
    };
    /**
     * Sets the useLocalTime property value. Whether the local device time or UTC time should be used when determining the available and deadline times.
     * @param value Value to set for the useLocalTime property.
     */
    public set useLocalTime(value: boolean | undefined) {
        this._useLocalTime = value;
    };
}
