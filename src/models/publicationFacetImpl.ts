import {PublicationFacet} from './publicationFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PublicationFacetImpl implements AdditionalDataHolder, Parsable, PublicationFacet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The state of publication for this document. Either published or checkout. Read-only. */
    public level?: string | undefined;
    /** The unique identifier for the version that is visible to the current caller. Read-only. */
    public versionId?: string | undefined;
    /**
     * Instantiates a new publicationFacet and sets the default values.
     * @param publicationFacetParameterValue 
     */
    public constructor(publicationFacetParameterValue?: PublicationFacet | undefined) {
        this.additionalData = publicationFacetParameterValue?.additionalData ? publicationFacetParameterValue?.additionalData! : {}
        this.level = publicationFacetParameterValue?.level ;
        this.versionId = publicationFacetParameterValue?.versionId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "level": n => { this.level = n.getStringValue(); },
            "versionId": n => { this.versionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.level){
        writer.writeStringValue("level", this.level);
        }
        if(this.versionId){
        writer.writeStringValue("versionId", this.versionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
