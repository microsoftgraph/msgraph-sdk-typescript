import {GetPresencesByUserIdRequestBody} from './getPresencesByUserIdRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPresencesByUserId method. */
export class GetPresencesByUserIdRequestBodyImpl implements AdditionalDataHolder, GetPresencesByUserIdRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The ids property */
    ids?: string[] | undefined;
    /**
     * Instantiates a new getPresencesByUserIdRequestBody and sets the default values.
     * @param getPresencesByUserIdRequestBodyParameterValue 
     */
    public constructor(getPresencesByUserIdRequestBodyParameterValue?: GetPresencesByUserIdRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getPresencesByUserIdRequestBodyParameterValue?.additionalData ? {} : getPresencesByUserIdRequestBodyParameterValue?.additionalData!
        this.ids = getPresencesByUserIdRequestBodyParameterValue?.ids ;
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
