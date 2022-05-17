import {RemoveGroupRequestBody} from './removeGroupRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeGroup method. */
export class RemoveGroupRequestBodyImpl implements AdditionalDataHolder, Parsable, RemoveGroupRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The groupId property */
    groupId?: string | undefined;
    /**
     * Instantiates a new removeGroupRequestBody and sets the default values.
     * @param removeGroupRequestBodyParameterValue 
     */
    public constructor(removeGroupRequestBodyParameterValue?: RemoveGroupRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = removeGroupRequestBodyParameterValue?.additionalData ? {} : removeGroupRequestBodyParameterValue?.additionalData!
        this.groupId = removeGroupRequestBodyParameterValue?.groupId ;
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
        if(this.groupId)
        writer.writeStringValue("groupId", this.groupId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
