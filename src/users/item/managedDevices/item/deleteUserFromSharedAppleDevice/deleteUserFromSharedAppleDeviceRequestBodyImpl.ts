import {DeleteUserFromSharedAppleDeviceRequestBody} from './deleteUserFromSharedAppleDeviceRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the deleteUserFromSharedAppleDevice method. */
export class DeleteUserFromSharedAppleDeviceRequestBodyImpl implements AdditionalDataHolder, DeleteUserFromSharedAppleDeviceRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The userPrincipalName property */
    userPrincipalName?: string | undefined;
    /**
     * Instantiates a new deleteUserFromSharedAppleDeviceRequestBody and sets the default values.
     * @param deleteUserFromSharedAppleDeviceRequestBodyParameterValue 
     */
    public constructor(deleteUserFromSharedAppleDeviceRequestBodyParameterValue?: DeleteUserFromSharedAppleDeviceRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = deleteUserFromSharedAppleDeviceRequestBodyParameterValue?.additionalData ? {} : deleteUserFromSharedAppleDeviceRequestBodyParameterValue?.additionalData!
        this.userPrincipalName = deleteUserFromSharedAppleDeviceRequestBodyParameterValue?.userPrincipalName ;
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
        if(this.userPrincipalName)
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
