import {CheckMemberObjectsRequestBody} from './checkMemberObjectsRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the checkMemberObjects method.  */
export class CheckMemberObjectsRequestBodyImpl implements AdditionalDataHolder, CheckMemberObjectsRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The ids property  */
    ids?: string[] | undefined;
    /**
     * Instantiates a new checkMemberObjectsRequestBody and sets the default values.
     * @param checkMemberObjectsRequestBodyParameterValue 
     */
    public constructor(checkMemberObjectsRequestBodyParameterValue?: CheckMemberObjectsRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = checkMemberObjectsRequestBodyParameterValue?.additionalData ? {} : checkMemberObjectsRequestBodyParameterValue?.additionalData!
        this.ids = checkMemberObjectsRequestBodyParameterValue?.ids ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ids": n => { this.ids = n.getCollectionOfPrimitiveValues<string>(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
