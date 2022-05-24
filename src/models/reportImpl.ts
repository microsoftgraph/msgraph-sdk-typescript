import {Report} from './report';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Configuration profile History reports. */
export class ReportImpl implements AdditionalDataHolder, Parsable, Report {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Report content; details vary by report type. */
    public content?: string | undefined;
    /**
     * Instantiates a new Report and sets the default values.
     * @param reportParameterValue 
     */
    public constructor(reportParameterValue?: Report | undefined) {
        this.additionalData = reportParameterValue?.additionalData ? reportParameterValue?.additionalData! : {}
        this.content = reportParameterValue?.content ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "content": n => { this.content = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
