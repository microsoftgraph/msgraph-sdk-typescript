import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {EdgeSearchEngineBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdgeSearchEngine extends EdgeSearchEngineBase implements Parsable {
    /** Allows IT admind to set a predefined default search engine for MDM-Controlled devices */
    private _edgeSearchEngineType?: EdgeSearchEngineType | undefined;
    /**
     * Instantiates a new EdgeSearchEngine and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the edgeSearchEngineType property value. Allows IT admind to set a predefined default search engine for MDM-Controlled devices
     * @returns a edgeSearchEngineType
     */
    public get edgeSearchEngineType() {
        return this._edgeSearchEngineType;
    };
    /**
     * Sets the edgeSearchEngineType property value. Allows IT admind to set a predefined default search engine for MDM-Controlled devices
     * @param value Value to set for the edgeSearchEngineType property.
     */
    public set edgeSearchEngineType(value: EdgeSearchEngineType | undefined) {
        this._edgeSearchEngineType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "edgeSearchEngineType": n => { this.edgeSearchEngineType = n.getEnumValue<EdgeSearchEngineType>(EdgeSearchEngineType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<EdgeSearchEngineType>("edgeSearchEngineType", this.edgeSearchEngineType);
    };
}
