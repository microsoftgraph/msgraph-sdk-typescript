import {AvailableProviderTypesResponse} from './availableProviderTypesResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the availableProviderTypes method. */
export class AvailableProviderTypesResponseImpl implements AdditionalDataHolder, AvailableProviderTypesResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: string[] | undefined;
    /**
     * Instantiates a new availableProviderTypesResponse and sets the default values.
     * @param availableProviderTypesResponseParameterValue 
     */
    public constructor(availableProviderTypesResponseParameterValue?: AvailableProviderTypesResponse | undefined) {
        this.additionalData = availableProviderTypesResponseParameterValue?.additionalData ? availableProviderTypesResponseParameterValue?.additionalData! : {}
        this.value = availableProviderTypesResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value){
        writer.writeCollectionOfPrimitiveValues<string>("value", this.value);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
