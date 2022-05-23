import {ConfirmCompromisedPostRequestBody} from './confirmCompromisedPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the confirmCompromised method. */
export class ConfirmCompromisedPostRequestBodyImpl implements AdditionalDataHolder, ConfirmCompromisedPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The userIds property */
    public userIds?: string[] | undefined;
    /**
     * Instantiates a new confirmCompromisedPostRequestBody and sets the default values.
     * @param confirmCompromisedPostRequestBodyParameterValue 
     */
    public constructor(confirmCompromisedPostRequestBodyParameterValue?: ConfirmCompromisedPostRequestBody | undefined) {
        this.additionalData = confirmCompromisedPostRequestBodyParameterValue?.additionalData ? confirmCompromisedPostRequestBodyParameterValue?.additionalData! : {}
        this.userIds = confirmCompromisedPostRequestBodyParameterValue?.userIds ;
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
        writer.writeCollectionOfPrimitiveValues<string>("userIds", this.userIds);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
