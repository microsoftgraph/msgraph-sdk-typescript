import {GetByIdsPostRequestBody} from './getByIdsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method. */
export class GetByIdsPostRequestBodyImpl implements AdditionalDataHolder, GetByIdsPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ids property */
    public ids?: string[] | undefined;
    /** The types property */
    public types?: string[] | undefined;
    /**
     * Instantiates a new getByIdsPostRequestBody and sets the default values.
     * @param getByIdsPostRequestBodyParameterValue 
     */
    public constructor(getByIdsPostRequestBodyParameterValue?: GetByIdsPostRequestBody | undefined) {
        this.additionalData = getByIdsPostRequestBodyParameterValue?.additionalData ? getByIdsPostRequestBodyParameterValue?.additionalData! : {}
        this.ids = getByIdsPostRequestBodyParameterValue?.ids ;
        this.types = getByIdsPostRequestBodyParameterValue?.types ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ids": n => { this.ids = n.getCollectionOfPrimitiveValues<string>(); },
            "types": n => { this.types = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.ids){
        writer.writeCollectionOfPrimitiveValues<string>("ids", this.ids);
        }
        if(this.types){
        writer.writeCollectionOfPrimitiveValues<string>("types", this.types);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
