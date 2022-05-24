import {CopyToSectionGroupPostRequestBody} from './copyToSectionGroupPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToSectionGroup method. */
export class CopyToSectionGroupPostRequestBodyImpl implements AdditionalDataHolder, CopyToSectionGroupPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The groupId property */
    public groupId?: string | undefined;
    /** The id property */
    public id?: string | undefined;
    /** The renameAs property */
    public renameAs?: string | undefined;
    /** The siteCollectionId property */
    public siteCollectionId?: string | undefined;
    /** The siteId property */
    public siteId?: string | undefined;
    /**
     * Instantiates a new copyToSectionGroupPostRequestBody and sets the default values.
     * @param copyToSectionGroupPostRequestBodyParameterValue 
     */
    public constructor(copyToSectionGroupPostRequestBodyParameterValue?: CopyToSectionGroupPostRequestBody | undefined) {
        this.additionalData = copyToSectionGroupPostRequestBodyParameterValue?.additionalData ? copyToSectionGroupPostRequestBodyParameterValue?.additionalData! : {}
        this.groupId = copyToSectionGroupPostRequestBodyParameterValue?.groupId ;
        this.id = copyToSectionGroupPostRequestBodyParameterValue?.id ;
        this.renameAs = copyToSectionGroupPostRequestBodyParameterValue?.renameAs ;
        this.siteCollectionId = copyToSectionGroupPostRequestBodyParameterValue?.siteCollectionId ;
        this.siteId = copyToSectionGroupPostRequestBodyParameterValue?.siteId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "groupId": n => { this.groupId = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "renameAs": n => { this.renameAs = n.getStringValue(); },
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
        if(this.renameAs){
        writer.writeStringValue("renameAs", this.renameAs);
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
