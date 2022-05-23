import {ResultTemplateOption} from './resultTemplateOption';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ResultTemplateOptionImpl implements AdditionalDataHolder, Parsable, ResultTemplateOption {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether search display layouts are enabled. If enabled, the user will get the result template to render the search results content in the resultTemplates property of the response. The result template is based on Adaptive Cards. This property is optional. */
    public enableResultTemplate?: boolean | undefined;
    /**
     * Instantiates a new resultTemplateOption and sets the default values.
     * @param resultTemplateOptionParameterValue 
     */
    public constructor(resultTemplateOptionParameterValue?: ResultTemplateOption | undefined) {
        this.additionalData = resultTemplateOptionParameterValue?.additionalData ? resultTemplateOptionParameterValue?.additionalData! : {}
        this.enableResultTemplate = resultTemplateOptionParameterValue?.enableResultTemplate ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enableResultTemplate": n => { this.enableResultTemplate = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enableResultTemplate){
        writer.writeBooleanValue("enableResultTemplate", this.enableResultTemplate);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
