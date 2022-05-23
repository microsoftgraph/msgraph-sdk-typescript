import {StringCollectionResponse} from './stringCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StringCollectionResponseImpl implements AdditionalDataHolder, Parsable, StringCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: string[] | undefined;
    /**
     * Instantiates a new StringCollectionResponse and sets the default values.
     * @param stringCollectionResponseParameterValue 
     */
    public constructor(stringCollectionResponseParameterValue?: StringCollectionResponse | undefined) {
        this.additionalData = stringCollectionResponseParameterValue?.additionalData ? stringCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = stringCollectionResponseParameterValue?.nextLink ;
        this.value = stringCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        writer.writeCollectionOfPrimitiveValues<string>("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
