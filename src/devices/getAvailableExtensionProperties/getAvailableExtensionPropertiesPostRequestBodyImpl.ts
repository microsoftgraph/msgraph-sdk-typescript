import {GetAvailableExtensionPropertiesPostRequestBody} from './getAvailableExtensionPropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAvailableExtensionProperties method. */
export class GetAvailableExtensionPropertiesPostRequestBodyImpl implements AdditionalDataHolder, GetAvailableExtensionPropertiesPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The isSyncedFromOnPremises property */
    public isSyncedFromOnPremises?: boolean | undefined;
    /**
     * Instantiates a new getAvailableExtensionPropertiesPostRequestBody and sets the default values.
     * @param getAvailableExtensionPropertiesPostRequestBodyParameterValue 
     */
    public constructor(getAvailableExtensionPropertiesPostRequestBodyParameterValue?: GetAvailableExtensionPropertiesPostRequestBody | undefined) {
        this.additionalData = getAvailableExtensionPropertiesPostRequestBodyParameterValue?.additionalData ? getAvailableExtensionPropertiesPostRequestBodyParameterValue?.additionalData! : {}
        this.isSyncedFromOnPremises = getAvailableExtensionPropertiesPostRequestBodyParameterValue?.isSyncedFromOnPremises ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isSyncedFromOnPremises": n => { this.isSyncedFromOnPremises = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isSyncedFromOnPremises){
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
