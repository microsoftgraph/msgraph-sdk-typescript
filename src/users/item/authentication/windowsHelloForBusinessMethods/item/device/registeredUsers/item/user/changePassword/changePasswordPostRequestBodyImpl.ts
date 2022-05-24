import {ChangePasswordPostRequestBody} from './changePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changePassword method. */
export class ChangePasswordPostRequestBodyImpl implements AdditionalDataHolder, ChangePasswordPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The currentPassword property */
    public currentPassword?: string | undefined;
    /** The newPassword property */
    public newPassword?: string | undefined;
    /**
     * Instantiates a new changePasswordPostRequestBody and sets the default values.
     * @param changePasswordPostRequestBodyParameterValue 
     */
    public constructor(changePasswordPostRequestBodyParameterValue?: ChangePasswordPostRequestBody | undefined) {
        this.additionalData = changePasswordPostRequestBodyParameterValue?.additionalData ? changePasswordPostRequestBodyParameterValue?.additionalData! : {}
        this.currentPassword = changePasswordPostRequestBodyParameterValue?.currentPassword ;
        this.newPassword = changePasswordPostRequestBodyParameterValue?.newPassword ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "currentPassword": n => { this.currentPassword = n.getStringValue(); },
            "newPassword": n => { this.newPassword = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.currentPassword){
        writer.writeStringValue("currentPassword", this.currentPassword);
        }
        if(this.newPassword){
        writer.writeStringValue("newPassword", this.newPassword);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
