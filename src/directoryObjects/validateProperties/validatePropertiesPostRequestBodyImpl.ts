import {ValidatePropertiesPostRequestBody} from './validatePropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the validateProperties method. */
export class ValidatePropertiesPostRequestBodyImpl implements AdditionalDataHolder, Parsable, ValidatePropertiesPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The displayName property */
    public displayName?: string | undefined;
    /** The entityType property */
    public entityType?: string | undefined;
    /** The mailNickname property */
    public mailNickname?: string | undefined;
    /** The onBehalfOfUserId property */
    public onBehalfOfUserId?: string | undefined;
    /**
     * Instantiates a new validatePropertiesPostRequestBody and sets the default values.
     * @param validatePropertiesPostRequestBodyParameterValue 
     */
    public constructor(validatePropertiesPostRequestBodyParameterValue?: ValidatePropertiesPostRequestBody | undefined) {
        this.additionalData = validatePropertiesPostRequestBodyParameterValue?.additionalData ? validatePropertiesPostRequestBodyParameterValue?.additionalData! : {}
        this.displayName = validatePropertiesPostRequestBodyParameterValue?.displayName ;
        this.entityType = validatePropertiesPostRequestBodyParameterValue?.entityType ;
        this.mailNickname = validatePropertiesPostRequestBodyParameterValue?.mailNickname ;
        this.onBehalfOfUserId = validatePropertiesPostRequestBodyParameterValue?.onBehalfOfUserId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "entityType": n => { this.entityType = n.getStringValue(); },
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
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.entityType){
        writer.writeStringValue("entityType", this.entityType);
        }
        if(this.mailNickname){
        writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.onBehalfOfUserId){
        writer.writeStringValue("onBehalfOfUserId", this.onBehalfOfUserId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
