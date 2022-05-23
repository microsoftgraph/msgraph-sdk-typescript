import {GetPresencesByUserIdPostRequestBody} from './getPresencesByUserIdPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPresencesByUserId method. */
export class GetPresencesByUserIdPostRequestBodyImpl implements AdditionalDataHolder, GetPresencesByUserIdPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ids property */
    public ids?: string[] | undefined;
    /**
     * Instantiates a new getPresencesByUserIdPostRequestBody and sets the default values.
     * @param getPresencesByUserIdPostRequestBodyParameterValue 
     */
    public constructor(getPresencesByUserIdPostRequestBodyParameterValue?: GetPresencesByUserIdPostRequestBody | undefined) {
        this.additionalData = getPresencesByUserIdPostRequestBodyParameterValue?.additionalData ? getPresencesByUserIdPostRequestBodyParameterValue?.additionalData! : {}
        this.ids = getPresencesByUserIdPostRequestBodyParameterValue?.ids ;
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
        writer.writeCollectionOfPrimitiveValues<string>("ids", this.ids);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
