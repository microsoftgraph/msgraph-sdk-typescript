import {DeleteUserFromSharedAppleDeviceActionResult} from './deleteUserFromSharedAppleDeviceActionResult';
import {DeviceActionResultImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeleteUserFromSharedAppleDeviceActionResultImpl extends DeviceActionResultImpl implements DeleteUserFromSharedAppleDeviceActionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** User principal name of the user to be deleted */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new DeleteUserFromSharedAppleDeviceActionResult and sets the default values.
     * @param deleteUserFromSharedAppleDeviceActionResultParameterValue 
     */
    public constructor(deleteUserFromSharedAppleDeviceActionResultParameterValue?: DeleteUserFromSharedAppleDeviceActionResult | undefined) {
        super(deleteUserFromSharedAppleDeviceActionResultParameterValue);
        this.additionalData = deleteUserFromSharedAppleDeviceActionResultParameterValue?.additionalData ? deleteUserFromSharedAppleDeviceActionResultParameterValue?.additionalData! : {};
        this.userPrincipalName = deleteUserFromSharedAppleDeviceActionResultParameterValue?.userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
