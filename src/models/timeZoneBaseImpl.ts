import {TimeZoneBase} from './timeZoneBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeZoneBaseImpl implements AdditionalDataHolder, Parsable, TimeZoneBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of a time zone. It can be a standard time zone name such as 'Hawaii-Aleutian Standard Time', or 'Customized Time Zone' for a custom time zone. */
    public name?: string | undefined;
    /**
     * Instantiates a new timeZoneBase and sets the default values.
     * @param timeZoneBaseParameterValue 
     */
    public constructor(timeZoneBaseParameterValue?: TimeZoneBase | undefined) {
        this.additionalData = timeZoneBaseParameterValue?.additionalData ? timeZoneBaseParameterValue?.additionalData! : {}
        this.name = timeZoneBaseParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
