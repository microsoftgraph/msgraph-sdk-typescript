import {InstantiateRequestBody} from './instantiateRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method.  */
export class InstantiateRequestBodyImpl implements AdditionalDataHolder, InstantiateRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The displayName property  */
    displayName?: string | undefined;
    /**
     * Instantiates a new instantiateRequestBody and sets the default values.
     * @param instantiateRequestBodyParameterValue 
     */
    public constructor(instantiateRequestBodyParameterValue?: InstantiateRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = instantiateRequestBodyParameterValue?.additionalData ? {} : instantiateRequestBodyParameterValue?.additionalData!
        this.displayName = instantiateRequestBodyParameterValue?.displayName ;
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
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
