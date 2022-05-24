import {AddGroupPostRequestBody} from './addGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addGroup method. */
export class AddGroupPostRequestBodyImpl implements AddGroupPostRequestBody, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The groupId property */
    public groupId?: string | undefined;
    /**
     * Instantiates a new addGroupPostRequestBody and sets the default values.
     * @param addGroupPostRequestBodyParameterValue 
     */
    public constructor(addGroupPostRequestBodyParameterValue?: AddGroupPostRequestBody | undefined) {
        this.additionalData = addGroupPostRequestBodyParameterValue?.additionalData ? addGroupPostRequestBodyParameterValue?.additionalData! : {}
        this.groupId = addGroupPostRequestBodyParameterValue?.groupId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupId": n => { this.groupId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupId){
        writer.writeStringValue("groupId", this.groupId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
