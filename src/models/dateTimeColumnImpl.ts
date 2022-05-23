import {DateTimeColumn} from './dateTimeColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DateTimeColumnImpl implements AdditionalDataHolder, DateTimeColumn, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default. */
    public displayAs?: string | undefined;
    /** Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime */
    public format?: string | undefined;
    /**
     * Instantiates a new dateTimeColumn and sets the default values.
     * @param dateTimeColumnParameterValue 
     */
    public constructor(dateTimeColumnParameterValue?: DateTimeColumn | undefined) {
        this.additionalData = dateTimeColumnParameterValue?.additionalData ? dateTimeColumnParameterValue?.additionalData! : {}
        this.displayAs = dateTimeColumnParameterValue?.displayAs ;
        this.format = dateTimeColumnParameterValue?.format ;
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
