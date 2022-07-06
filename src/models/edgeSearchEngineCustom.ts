import {EdgeSearchEngineBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdgeSearchEngineCustom extends EdgeSearchEngineBase implements Parsable {
    /** Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine. */
    private _edgeSearchEngineOpenSearchXmlUrl?: string | undefined;
    /**
     * Instantiates a new EdgeSearchEngineCustom and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the edgeSearchEngineOpenSearchXmlUrl property value. Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine.
     * @returns a string
     */
    public get edgeSearchEngineOpenSearchXmlUrl() {
        return this._edgeSearchEngineOpenSearchXmlUrl;
    };
    /**
     * Sets the edgeSearchEngineOpenSearchXmlUrl property value. Points to a https link containing the OpenSearch xml file that contains, at minimum, the short name and the URL to the search Engine.
     * @param value Value to set for the edgeSearchEngineOpenSearchXmlUrl property.
     */
    public set edgeSearchEngineOpenSearchXmlUrl(value: string | undefined) {
        this._edgeSearchEngineOpenSearchXmlUrl = value;
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
        writer.writeStringValue("edgeSearchEngineOpenSearchXmlUrl", this.edgeSearchEngineOpenSearchXmlUrl);
    };
}
