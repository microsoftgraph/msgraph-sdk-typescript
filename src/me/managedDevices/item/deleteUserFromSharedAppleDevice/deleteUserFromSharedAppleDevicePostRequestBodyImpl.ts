import {DeleteUserFromSharedAppleDevicePostRequestBody} from './deleteUserFromSharedAppleDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the deleteUserFromSharedAppleDevice method. */
export class DeleteUserFromSharedAppleDevicePostRequestBodyImpl implements AdditionalDataHolder, DeleteUserFromSharedAppleDevicePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The userPrincipalName property */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deleteUserFromSharedAppleDevicePostRequestBody and sets the default values.
     * @param deleteUserFromSharedAppleDevicePostRequestBodyParameterValue 
     */
    public constructor(deleteUserFromSharedAppleDevicePostRequestBodyParameterValue?: DeleteUserFromSharedAppleDevicePostRequestBody | undefined) {
        this.additionalData = deleteUserFromSharedAppleDevicePostRequestBodyParameterValue?.additionalData ? deleteUserFromSharedAppleDevicePostRequestBodyParameterValue?.additionalData! : {}
        this.userPrincipalName = deleteUserFromSharedAppleDevicePostRequestBodyParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
