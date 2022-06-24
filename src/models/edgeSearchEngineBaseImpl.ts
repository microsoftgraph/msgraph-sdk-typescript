import {EdgeSearchEngineBase} from './edgeSearchEngineBase';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Allows IT admins to set a default search engine for MDM-Controlled devices. Users can override this and change their default search engine provided the AllowSearchEngineCustomization policy is not set. */
export class EdgeSearchEngineBaseImpl implements EdgeSearchEngineBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new edgeSearchEngineBase and sets the default values.
     * @param edgeSearchEngineBaseParameterValue 
     */
    public constructor(edgeSearchEngineBaseParameterValue?: EdgeSearchEngineBase | undefined) {
        this.additionalData = edgeSearchEngineBaseParameterValue?.additionalData ? edgeSearchEngineBaseParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}
