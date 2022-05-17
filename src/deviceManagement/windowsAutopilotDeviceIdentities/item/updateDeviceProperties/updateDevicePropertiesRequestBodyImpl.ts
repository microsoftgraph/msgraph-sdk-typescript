import {UpdateDevicePropertiesRequestBody} from './updateDevicePropertiesRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateDeviceProperties method. */
export class UpdateDevicePropertiesRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateDevicePropertiesRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The addressableUserName property */
    addressableUserName?: string | undefined;
    /** The displayName property */
    displayName?: string | undefined;
    /** The groupTag property */
    groupTag?: string | undefined;
    /** The userPrincipalName property */
    userPrincipalName?: string | undefined;
    /**
     * Instantiates a new updateDevicePropertiesRequestBody and sets the default values.
     * @param updateDevicePropertiesRequestBodyParameterValue 
     */
    public constructor(updateDevicePropertiesRequestBodyParameterValue?: UpdateDevicePropertiesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = updateDevicePropertiesRequestBodyParameterValue?.additionalData ? {} : updateDevicePropertiesRequestBodyParameterValue?.additionalData!
        this.addressableUserName = updateDevicePropertiesRequestBodyParameterValue?.addressableUserName ;
        this.displayName = updateDevicePropertiesRequestBodyParameterValue?.displayName ;
        this.groupTag = updateDevicePropertiesRequestBodyParameterValue?.groupTag ;
        this.userPrincipalName = updateDevicePropertiesRequestBodyParameterValue?.userPrincipalName ;
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
        if(this.addressableUserName)
        writer.writeStringValue("addressableUserName", this.addressableUserName);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.groupTag){
        if(this.groupTag)
        writer.writeStringValue("groupTag", this.groupTag);
        }
        if(this.userPrincipalName){
        if(this.userPrincipalName)
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
