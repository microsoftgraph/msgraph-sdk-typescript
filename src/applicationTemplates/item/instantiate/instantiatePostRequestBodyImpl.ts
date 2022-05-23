import {InstantiatePostRequestBody} from './instantiatePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class InstantiatePostRequestBodyImpl implements AdditionalDataHolder, InstantiatePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The displayName property */
    public displayName?: string | undefined;
    /**
     * Instantiates a new instantiatePostRequestBody and sets the default values.
     * @param instantiatePostRequestBodyParameterValue 
     */
    public constructor(instantiatePostRequestBodyParameterValue?: InstantiatePostRequestBody | undefined) {
        this.additionalData = instantiatePostRequestBodyParameterValue?.additionalData ? instantiatePostRequestBodyParameterValue?.additionalData! : {}
        this.displayName = instantiatePostRequestBodyParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
