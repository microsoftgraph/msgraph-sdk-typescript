import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleEntity implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _endDateTime?: Date | undefined;
    private _odataType?: string | undefined;
    private _startDateTime?: Date | undefined;
    private _theme?: ScheduleEntityTheme | undefined;
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
     * Instantiates a new scheduleEntity and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "theme": n => { this.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
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
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the theme property value. 
     * @returns a scheduleEntityTheme
     */
    public get theme() {
        return this._theme;
    };
    /**
     * Sets the theme property value. 
     * @param value Value to set for the theme property.
     */
    public set theme(value: ScheduleEntityTheme | undefined) {
        this._theme = value;
    };
}
