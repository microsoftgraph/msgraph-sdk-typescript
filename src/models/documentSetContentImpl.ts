import {ContentTypeInfo} from './contentTypeInfo';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {DocumentSetContent} from './documentSetContent';
import {ContentTypeInfoImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetContentImpl implements DocumentSetContent {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Content type information of the file. */
    private _contentType?: ContentTypeInfo | undefined;
    /** Name of the file in resource folder that should be added as a default content or a template in the document set */
    private _fileName?: string | undefined;
    /** Folder name in which the file will be placed when a new document set is created in the library. */
    private _folderName?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new documentSetContent and sets the default values.
     * @param documentSetContentParameterValue 
     */
    public constructor(documentSetContentParameterValue?: DocumentSetContent | undefined) {
        this._additionalData = documentSetContentParameterValue?.additionalData ? documentSetContentParameterValue?.additionalData! : {};
        this._contentType = documentSetContentParameterValue?.contentType;
        this._fileName = documentSetContentParameterValue?.fileName;
        this._folderName = documentSetContentParameterValue?.folderName;
    };
    /**
     * Gets the contentType property value. Content type information of the file.
     * @returns a ContentTypeInfoInterface
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. Content type information of the file.
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        if(value) {
            this._contentType = value instanceof ContentTypeInfoImpl? value : new ContentTypeInfoImpl(value);
        }
    };
    /**
     * Gets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set
     * @returns a string
     */
    public get fileName() {
        return this._fileName;
    };
    /**
     * Sets the fileName property value. Name of the file in resource folder that should be added as a default content or a template in the document set
     * @param value Value to set for the fileName property.
     */
    public set fileName(value: string | undefined) {
        if(value) {
            this._fileName = value;
        }
    };
    /**
     * Gets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @returns a string
     */
    public get folderName() {
        return this._folderName;
    };
    /**
     * Sets the folderName property value. Folder name in which the file will be placed when a new document set is created in the library.
     * @param value Value to set for the folderName property.
     */
    public set folderName(value: string | undefined) {
        if(value) {
            this._folderName = value;
        }
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
            writer.writeObjectValue<ContentTypeInfoImpl>("contentType", (!this.contentType || this.contentType instanceof ContentTypeInfoImpl? this.contentType : new ContentTypeInfoImpl(this.contentType)));
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
