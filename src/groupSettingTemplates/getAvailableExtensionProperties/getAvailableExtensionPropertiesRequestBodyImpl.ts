import {GetAvailableExtensionPropertiesRequestBody} from './getAvailableExtensionPropertiesRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getAvailableExtensionProperties method.  */
export class GetAvailableExtensionPropertiesRequestBodyImpl implements AdditionalDataHolder, GetAvailableExtensionPropertiesRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The isSyncedFromOnPremises property  */
    isSyncedFromOnPremises?: boolean | undefined;
    /**
     * Instantiates a new getAvailableExtensionPropertiesRequestBody and sets the default values.
     * @param getAvailableExtensionPropertiesRequestBodyParameterValue 
     */
    public constructor(getAvailableExtensionPropertiesRequestBodyParameterValue?: GetAvailableExtensionPropertiesRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = getAvailableExtensionPropertiesRequestBodyParameterValue?.additionalData ? {} : getAvailableExtensionPropertiesRequestBodyParameterValue?.additionalData!
        this.isSyncedFromOnPremises = getAvailableExtensionPropertiesRequestBodyParameterValue?.isSyncedFromOnPremises ;
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
        if(this.isSyncedFromOnPremises)
        writer.writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
