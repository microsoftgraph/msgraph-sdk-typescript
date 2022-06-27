import {EdgeSearchEngine} from './edgeSearchEngine';
import {EdgeSearchEngineType} from './edgeSearchEngineType';
import {EdgeSearchEngineBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdgeSearchEngineImpl extends EdgeSearchEngineBaseImpl implements EdgeSearchEngine {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Allows IT admins to set a predefined default search engine for MDM-Controlled devices. Possible values are: default, bing. */
    public edgeSearchEngineType?: EdgeSearchEngineType | undefined;
    /**
     * Instantiates a new EdgeSearchEngine and sets the default values.
     * @param edgeSearchEngineParameterValue 
     */
    public constructor(edgeSearchEngineParameterValue?: EdgeSearchEngine | undefined) {
        super(edgeSearchEngineParameterValue);
        this.additionalData = edgeSearchEngineParameterValue?.additionalData ? edgeSearchEngineParameterValue?.additionalData! : {};
        this.edgeSearchEngineType = edgeSearchEngineParameterValue?.edgeSearchEngineType;
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
        if(this.edgeSearchEngineType){
            writer.writeEnumValue<EdgeSearchEngineType>("edgeSearchEngineType", this.edgeSearchEngineType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
