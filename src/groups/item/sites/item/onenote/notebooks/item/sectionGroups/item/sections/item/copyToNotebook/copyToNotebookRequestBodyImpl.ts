import {CopyToNotebookRequestBody} from './copyToNotebookRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToNotebook method. */
export class CopyToNotebookRequestBodyImpl implements AdditionalDataHolder, CopyToNotebookRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The groupId property */
    groupId?: string | undefined;
    /** The id property */
    id?: string | undefined;
    /** The renameAs property */
    renameAs?: string | undefined;
    /** The siteCollectionId property */
    siteCollectionId?: string | undefined;
    /** The siteId property */
    siteId?: string | undefined;
    /**
     * Instantiates a new copyToNotebookRequestBody and sets the default values.
     * @param copyToNotebookRequestBodyParameterValue 
     */
    public constructor(copyToNotebookRequestBodyParameterValue?: CopyToNotebookRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = copyToNotebookRequestBodyParameterValue?.additionalData ? {} : copyToNotebookRequestBodyParameterValue?.additionalData!
        this.groupId = copyToNotebookRequestBodyParameterValue?.groupId ;
        this.id = copyToNotebookRequestBodyParameterValue?.id ;
        this.renameAs = copyToNotebookRequestBodyParameterValue?.renameAs ;
        this.siteCollectionId = copyToNotebookRequestBodyParameterValue?.siteCollectionId ;
        this.siteId = copyToNotebookRequestBodyParameterValue?.siteId ;
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
        if(this.groupId)
        writer.writeStringValue("groupId", this.groupId);
        }
        if(this.id){
        if(this.id)
        writer.writeStringValue("id", this.id);
        }
        if(this.renameAs){
        if(this.renameAs)
        writer.writeStringValue("renameAs", this.renameAs);
        }
        if(this.siteCollectionId){
        if(this.siteCollectionId)
        writer.writeStringValue("siteCollectionId", this.siteCollectionId);
        }
        if(this.siteId){
        if(this.siteId)
        writer.writeStringValue("siteId", this.siteId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
