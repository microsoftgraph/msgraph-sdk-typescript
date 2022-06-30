import {DateTimeColumn} from './dateTimeColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DateTimeColumnImpl implements DateTimeColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default. */
    private _displayAs?: string | undefined;
    /** Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime */
    private _format?: string | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new dateTimeColumn and sets the default values.
     * @param dateTimeColumnParameterValue 
     */
    public constructor(dateTimeColumnParameterValue?: DateTimeColumn | undefined) {
        this._additionalData = dateTimeColumnParameterValue?.additionalData ? dateTimeColumnParameterValue?.additionalData! : {};
        this._displayAs = dateTimeColumnParameterValue?.displayAs;
        this._format = dateTimeColumnParameterValue?.format;
    };
    /**
     * Gets the displayAs property value. How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default.
     * @returns a string
     */
    public get displayAs() {
        return this._displayAs;
    };
    /**
     * Sets the displayAs property value. How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default.
     * @param value Value to set for the displayAs property.
     */
    public set displayAs(value: string | undefined) {
        if(value) {
            this._displayAs = value;
        }
    };
    /**
     * Gets the format property value. Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
     * @returns a string
     */
    public get format() {
        return this._format;
    };
    /**
     * Sets the format property value. Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime
     * @param value Value to set for the format property.
     */
    public set format(value: string | undefined) {
        if(value) {
            this._format = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayAs": n => { this.displayAs = n.getStringValue(); },
            "format": n => { this.format = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayAs){
            writer.writeStringValue("displayAs", this.displayAs);
        }
        if(this.format){
            writer.writeStringValue("format", this.format);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
