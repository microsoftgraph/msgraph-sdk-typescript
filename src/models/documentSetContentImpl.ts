import {ContentTypeInfo} from './contentTypeInfo';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {DocumentSetContent} from './documentSetContent';
import {ContentTypeInfoImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetContentImpl implements AdditionalDataHolder, DocumentSetContent, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Content type information of the file. */
    public contentType?: ContentTypeInfo | undefined;
    /** Name of the file in resource folder that should be added as a default content or a template in the document set */
    public fileName?: string | undefined;
    /** Folder name in which the file will be placed when a new document set is created in the library. */
    public folderName?: string | undefined;
    /**
     * Instantiates a new documentSetContent and sets the default values.
     * @param documentSetContentParameterValue 
     */
    public constructor(documentSetContentParameterValue?: DocumentSetContent | undefined) {
        this.additionalData = documentSetContentParameterValue?.additionalData ? documentSetContentParameterValue?.additionalData! : {}
        this.contentType = documentSetContentParameterValue?.contentType ;
        this.fileName = documentSetContentParameterValue?.fileName ;
        this.folderName = documentSetContentParameterValue?.folderName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentType": n => { this.contentType = n.getObjectValue<ContentTypeInfoImpl>(createContentTypeInfoFromDiscriminatorValue); },
            "fileName": n => { this.fileName = n.getStringValue(); },
            "folderName": n => { this.folderName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentType){
        writer.writeObjectValue<ContentTypeInfoImpl>("contentType", new ContentTypeInfoImpl(this.contentType));
        }
        if(this.fileName){
        writer.writeStringValue("fileName", this.fileName);
        }
        if(this.folderName){
        writer.writeStringValue("folderName", this.folderName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
