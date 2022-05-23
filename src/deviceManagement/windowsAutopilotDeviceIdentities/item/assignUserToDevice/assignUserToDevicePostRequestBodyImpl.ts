import {AssignUserToDevicePostRequestBody} from './assignUserToDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assignUserToDevice method. */
export class AssignUserToDevicePostRequestBodyImpl implements AdditionalDataHolder, AssignUserToDevicePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The addressableUserName property */
    public addressableUserName?: string | undefined;
    /** The userPrincipalName property */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new assignUserToDevicePostRequestBody and sets the default values.
     * @param assignUserToDevicePostRequestBodyParameterValue 
     */
    public constructor(assignUserToDevicePostRequestBodyParameterValue?: AssignUserToDevicePostRequestBody | undefined) {
        this.additionalData = assignUserToDevicePostRequestBodyParameterValue?.additionalData ? assignUserToDevicePostRequestBodyParameterValue?.additionalData! : {}
        this.addressableUserName = assignUserToDevicePostRequestBodyParameterValue?.addressableUserName ;
        this.userPrincipalName = assignUserToDevicePostRequestBodyParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addressableUserName": n => { this.addressableUserName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.addressableUserName){
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
