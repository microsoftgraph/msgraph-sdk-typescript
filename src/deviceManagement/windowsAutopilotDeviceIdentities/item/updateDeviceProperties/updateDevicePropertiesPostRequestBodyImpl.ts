import {UpdateDevicePropertiesPostRequestBody} from './updateDevicePropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateDeviceProperties method. */
export class UpdateDevicePropertiesPostRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateDevicePropertiesPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The addressableUserName property */
    public addressableUserName?: string | undefined;
    /** The displayName property */
    public displayName?: string | undefined;
    /** The groupTag property */
    public groupTag?: string | undefined;
    /** The userPrincipalName property */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new updateDevicePropertiesPostRequestBody and sets the default values.
     * @param updateDevicePropertiesPostRequestBodyParameterValue 
     */
    public constructor(updateDevicePropertiesPostRequestBodyParameterValue?: UpdateDevicePropertiesPostRequestBody | undefined) {
        this.additionalData = updateDevicePropertiesPostRequestBodyParameterValue?.additionalData ? updateDevicePropertiesPostRequestBodyParameterValue?.additionalData! : {}
        this.addressableUserName = updateDevicePropertiesPostRequestBodyParameterValue?.addressableUserName ;
        this.displayName = updateDevicePropertiesPostRequestBodyParameterValue?.displayName ;
        this.groupTag = updateDevicePropertiesPostRequestBodyParameterValue?.groupTag ;
        this.userPrincipalName = updateDevicePropertiesPostRequestBodyParameterValue?.userPrincipalName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addressableUserName": n => { this.addressableUserName = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "groupTag": n => { this.groupTag = n.getStringValue(); },
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
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.groupTag){
        writer.writeStringValue("groupTag", this.groupTag);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
