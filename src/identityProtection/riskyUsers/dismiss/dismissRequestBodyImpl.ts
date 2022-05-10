import {DismissRequestBody} from './dismissRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the dismiss method.  */
export class DismissRequestBodyImpl implements AdditionalDataHolder, DismissRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The userIds property  */
    userIds?: string[] | undefined;
    /**
     * Instantiates a new dismissRequestBody and sets the default values.
     * @param dismissRequestBodyParameterValue 
     */
    public constructor(dismissRequestBodyParameterValue?: DismissRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = dismissRequestBodyParameterValue?.additionalData ? {} : dismissRequestBodyParameterValue?.additionalData!
        this.userIds = dismissRequestBodyParameterValue?.userIds ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "userIds": n => { this.userIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.userIds){
        if(this.userIds)
        writer.writeCollectionOfPrimitiveValues<string>("userIds", this.userIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
