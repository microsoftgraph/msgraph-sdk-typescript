import {EdgeSearchEngineCustom} from './edgeSearchEngineCustom';
import {EdgeSearchEngineBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdgeSearchEngineCustomImpl extends EdgeSearchEngineBaseImpl implements EdgeSearchEngineCustom {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine. */
    public edgeSearchEngineOpenSearchXmlUrl?: string | undefined;
    /**
     * Instantiates a new EdgeSearchEngineCustom and sets the default values.
     * @param edgeSearchEngineCustomParameterValue 
     */
    public constructor(edgeSearchEngineCustomParameterValue?: EdgeSearchEngineCustom | undefined) {
        super(edgeSearchEngineCustomParameterValue);
        this.additionalData = edgeSearchEngineCustomParameterValue?.additionalData ? edgeSearchEngineCustomParameterValue?.additionalData! : {};
        this.edgeSearchEngineOpenSearchXmlUrl = edgeSearchEngineCustomParameterValue?.edgeSearchEngineOpenSearchXmlUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "edgeSearchEngineOpenSearchXmlUrl": n => { this.edgeSearchEngineOpenSearchXmlUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.edgeSearchEngineOpenSearchXmlUrl){
            writer.writeStringValue("edgeSearchEngineOpenSearchXmlUrl", this.edgeSearchEngineOpenSearchXmlUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
