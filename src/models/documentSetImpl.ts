import {ColumnDefinition} from './columnDefinition';
import {ContentTypeInfo} from './contentTypeInfo';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {ColumnDefinitionImpl, ContentTypeInfoImpl, DocumentSetContentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetImpl implements DocumentSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Content types allowed in document set. */
    private _allowedContentTypes?: ContentTypeInfo[] | undefined;
    /** Default contents of document set. */
    private _defaultContents?: DocumentSetContent[] | undefined;
    /** Indicates whether to add the name of the document set to each file name. */
    private _propagateWelcomePageChanges?: boolean | undefined;
    /** The sharedColumns property */
    private _sharedColumns?: ColumnDefinition[] | undefined;
    /** Add the name of the Document Set to each file name. */
    private _shouldPrefixNameToFile?: boolean | undefined;
    /** The welcomePageColumns property */
    private _welcomePageColumns?: ColumnDefinition[] | undefined;
    /** Welcome page absolute URL. */
    private _welcomePageUrl?: string | undefined;
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
     * Gets the allowedContentTypes property value. Content types allowed in document set.
     * @returns a ContentTypeInfoInterface
     */
    public get allowedContentTypes() {
        return this._allowedContentTypes;
    };
    /**
     * Sets the allowedContentTypes property value. Content types allowed in document set.
     * @param value Value to set for the allowedContentTypes property.
     */
    public set allowedContentTypes(value: ContentTypeInfo[] | undefined) {
        if(value) {
            const allowedContentTypesArrValue: ContentTypeInfoImpl[] = [];
            this.allowedContentTypes?.forEach(element => {
                allowedContentTypesArrValue.push((element instanceof ContentTypeInfoImpl? element:new ContentTypeInfoImpl(element)));
            });
            this._allowedContentTypes = allowedContentTypesArrValue;
        }
    };
    /**
     * Instantiates a new documentSet and sets the default values.
     * @param documentSetParameterValue 
     */
    public constructor(documentSetParameterValue?: DocumentSet | undefined) {
        this._additionalData = documentSetParameterValue?.additionalData ? documentSetParameterValue?.additionalData! : {};
        this._allowedContentTypes = documentSetParameterValue?.allowedContentTypes;
        this._defaultContents = documentSetParameterValue?.defaultContents;
        this._propagateWelcomePageChanges = documentSetParameterValue?.propagateWelcomePageChanges;
        this._sharedColumns = documentSetParameterValue?.sharedColumns;
        this._shouldPrefixNameToFile = documentSetParameterValue?.shouldPrefixNameToFile;
        this._welcomePageColumns = documentSetParameterValue?.welcomePageColumns;
        this._welcomePageUrl = documentSetParameterValue?.welcomePageUrl;
    };
    /**
     * Gets the defaultContents property value. Default contents of document set.
     * @returns a DocumentSetContentInterface
     */
    public get defaultContents() {
        return this._defaultContents;
    };
    /**
     * Sets the defaultContents property value. Default contents of document set.
     * @param value Value to set for the defaultContents property.
     */
    public set defaultContents(value: DocumentSetContent[] | undefined) {
        if(value) {
            const defaultContentsArrValue: DocumentSetContentImpl[] = [];
            this.defaultContents?.forEach(element => {
                defaultContentsArrValue.push((element instanceof DocumentSetContentImpl? element:new DocumentSetContentImpl(element)));
            });
            this._defaultContents = defaultContentsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedContentTypes": n => { this.allowedContentTypes = n.getCollectionOfObjectValues<ContentTypeInfoImpl>(createContentTypeInfoFromDiscriminatorValue); },
            "defaultContents": n => { this.defaultContents = n.getCollectionOfObjectValues<DocumentSetContentImpl>(createDocumentSetContentFromDiscriminatorValue); },
            "propagateWelcomePageChanges": n => { this.propagateWelcomePageChanges = n.getBooleanValue(); },
            "sharedColumns": n => { this.sharedColumns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "shouldPrefixNameToFile": n => { this.shouldPrefixNameToFile = n.getBooleanValue(); },
            "welcomePageColumns": n => { this.welcomePageColumns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "welcomePageUrl": n => { this.welcomePageUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the propagateWelcomePageChanges property value. Indicates whether to add the name of the document set to each file name.
     * @returns a boolean
     */
    public get propagateWelcomePageChanges() {
        return this._propagateWelcomePageChanges;
    };
    /**
     * Sets the propagateWelcomePageChanges property value. Indicates whether to add the name of the document set to each file name.
     * @param value Value to set for the propagateWelcomePageChanges property.
     */
    public set propagateWelcomePageChanges(value: boolean | undefined) {
        if(value) {
            this._propagateWelcomePageChanges = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedContentTypes && this.allowedContentTypes.length != 0){        const allowedContentTypesArrValue: ContentTypeInfoImpl[] = [];
        this.allowedContentTypes?.forEach(element => {
            allowedContentTypesArrValue.push((element instanceof ContentTypeInfoImpl? element:new ContentTypeInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContentTypeInfoImpl>("allowedContentTypes", allowedContentTypesArrValue);
        }
        if(this.defaultContents && this.defaultContents.length != 0){        const defaultContentsArrValue: DocumentSetContentImpl[] = [];
        this.defaultContents?.forEach(element => {
            defaultContentsArrValue.push((element instanceof DocumentSetContentImpl? element:new DocumentSetContentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DocumentSetContentImpl>("defaultContents", defaultContentsArrValue);
        }
        if(this.propagateWelcomePageChanges){
            writer.writeBooleanValue("propagateWelcomePageChanges", this.propagateWelcomePageChanges);
        }
        if(this.sharedColumns && this.sharedColumns.length != 0){        const sharedColumnsArrValue: ColumnDefinitionImpl[] = [];
        this.sharedColumns?.forEach(element => {
            sharedColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("sharedColumns", sharedColumnsArrValue);
        }
        if(this.shouldPrefixNameToFile){
            writer.writeBooleanValue("shouldPrefixNameToFile", this.shouldPrefixNameToFile);
        }
        if(this.welcomePageColumns && this.welcomePageColumns.length != 0){        const welcomePageColumnsArrValue: ColumnDefinitionImpl[] = [];
        this.welcomePageColumns?.forEach(element => {
            welcomePageColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("welcomePageColumns", welcomePageColumnsArrValue);
        }
        if(this.welcomePageUrl){
            writer.writeStringValue("welcomePageUrl", this.welcomePageUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedColumns property value. The sharedColumns property
     * @returns a ColumnDefinitionInterface
     */
    public get sharedColumns() {
        return this._sharedColumns;
    };
    /**
     * Sets the sharedColumns property value. The sharedColumns property
     * @param value Value to set for the sharedColumns property.
     */
    public set sharedColumns(value: ColumnDefinition[] | undefined) {
        if(value) {
            const sharedColumnsArrValue: ColumnDefinitionImpl[] = [];
            this.sharedColumns?.forEach(element => {
                sharedColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
            });
            this._sharedColumns = sharedColumnsArrValue;
        }
    };
    /**
     * Gets the shouldPrefixNameToFile property value. Add the name of the Document Set to each file name.
     * @returns a boolean
     */
    public get shouldPrefixNameToFile() {
        return this._shouldPrefixNameToFile;
    };
    /**
     * Sets the shouldPrefixNameToFile property value. Add the name of the Document Set to each file name.
     * @param value Value to set for the shouldPrefixNameToFile property.
     */
    public set shouldPrefixNameToFile(value: boolean | undefined) {
        if(value) {
            this._shouldPrefixNameToFile = value;
        }
    };
    /**
     * Gets the welcomePageColumns property value. The welcomePageColumns property
     * @returns a ColumnDefinitionInterface
     */
    public get welcomePageColumns() {
        return this._welcomePageColumns;
    };
    /**
     * Sets the welcomePageColumns property value. The welcomePageColumns property
     * @param value Value to set for the welcomePageColumns property.
     */
    public set welcomePageColumns(value: ColumnDefinition[] | undefined) {
        if(value) {
            const welcomePageColumnsArrValue: ColumnDefinitionImpl[] = [];
            this.welcomePageColumns?.forEach(element => {
                welcomePageColumnsArrValue.push((element instanceof ColumnDefinitionImpl? element:new ColumnDefinitionImpl(element)));
            });
            this._welcomePageColumns = welcomePageColumnsArrValue;
        }
    };
    /**
     * Gets the welcomePageUrl property value. Welcome page absolute URL.
     * @returns a string
     */
    public get welcomePageUrl() {
        return this._welcomePageUrl;
    };
    /**
     * Sets the welcomePageUrl property value. Welcome page absolute URL.
     * @param value Value to set for the welcomePageUrl property.
     */
    public set welcomePageUrl(value: string | undefined) {
        if(value) {
            this._welcomePageUrl = value;
        }
    };
}
