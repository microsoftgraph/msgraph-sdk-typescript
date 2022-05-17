import {ValidatePropertiesRequestBody} from './validatePropertiesRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validateProperties method. */
export class ValidatePropertiesRequestBodyImpl implements AdditionalDataHolder, Parsable, ValidatePropertiesRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The displayName property */
    displayName?: string | undefined;
    /** The mailNickname property */
    mailNickname?: string | undefined;
    /** The onBehalfOfUserId property */
    onBehalfOfUserId?: string | undefined;
    /**
     * Instantiates a new validatePropertiesRequestBody and sets the default values.
     * @param validatePropertiesRequestBodyParameterValue 
     */
    public constructor(validatePropertiesRequestBodyParameterValue?: ValidatePropertiesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = validatePropertiesRequestBodyParameterValue?.additionalData ? {} : validatePropertiesRequestBodyParameterValue?.additionalData!
        this.displayName = validatePropertiesRequestBodyParameterValue?.displayName ;
        this.mailNickname = validatePropertiesRequestBodyParameterValue?.mailNickname ;
        this.onBehalfOfUserId = validatePropertiesRequestBodyParameterValue?.onBehalfOfUserId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "onBehalfOfUserId": n => { this.onBehalfOfUserId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.mailNickname){
        if(this.mailNickname)
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.onBehalfOfUserId){
        if(this.onBehalfOfUserId)
        writer.writeStringValue("onBehalfOfUserId", this.onBehalfOfUserId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
