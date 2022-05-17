import {GetByIdsRequestBody} from './getByIdsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method. */
export class GetByIdsRequestBodyImpl implements AdditionalDataHolder, GetByIdsRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The ids property */
    ids?: string[] | undefined;
    /** The types property */
    types?: string[] | undefined;
    /**
     * Instantiates a new getByIdsRequestBody and sets the default values.
     * @param getByIdsRequestBodyParameterValue 
     */
    public constructor(getByIdsRequestBodyParameterValue?: GetByIdsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getByIdsRequestBodyParameterValue?.additionalData ? {} : getByIdsRequestBodyParameterValue?.additionalData!
        this.ids = getByIdsRequestBodyParameterValue?.ids ;
        this.types = getByIdsRequestBodyParameterValue?.types ;
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
        if(this.ids)
        writer.writeCollectionOfPrimitiveValues<string>("ids", this.ids);
        }
        if(this.types){
        if(this.types)
        writer.writeCollectionOfPrimitiveValues<string>("types", this.types);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
