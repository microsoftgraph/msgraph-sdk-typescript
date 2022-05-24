import {CopyToSectionPostRequestBody} from './copyToSectionPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToSection method. */
export class CopyToSectionPostRequestBodyImpl implements AdditionalDataHolder, CopyToSectionPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The groupId property */
    public groupId?: string | undefined;
    /** The id property */
    public id?: string | undefined;
    /** The siteCollectionId property */
    public siteCollectionId?: string | undefined;
    /** The siteId property */
    public siteId?: string | undefined;
    /**
     * Instantiates a new copyToSectionPostRequestBody and sets the default values.
     * @param copyToSectionPostRequestBodyParameterValue 
     */
    public constructor(copyToSectionPostRequestBodyParameterValue?: CopyToSectionPostRequestBody | undefined) {
        this.additionalData = copyToSectionPostRequestBodyParameterValue?.additionalData ? copyToSectionPostRequestBodyParameterValue?.additionalData! : {}
        this.groupId = copyToSectionPostRequestBodyParameterValue?.groupId ;
        this.id = copyToSectionPostRequestBodyParameterValue?.id ;
        this.siteCollectionId = copyToSectionPostRequestBodyParameterValue?.siteCollectionId ;
        this.siteId = copyToSectionPostRequestBodyParameterValue?.siteId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupId": n => { this.groupId = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "siteCollectionId": n => { this.siteCollectionId = n.getStringValue(); },
            "siteId": n => { this.siteId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.groupId){
        writer.writeStringValue("groupId", this.groupId);
        }
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.siteCollectionId){
        writer.writeStringValue("siteCollectionId", this.siteCollectionId);
        }
        if(this.siteId){
        writer.writeStringValue("siteId", this.siteId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
