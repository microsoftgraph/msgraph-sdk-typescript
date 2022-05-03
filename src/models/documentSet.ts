import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {ColumnDefinition, ContentTypeInfo, DocumentSetContent} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSet implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** Content types allowed in document set.  */
    private _allowedContentTypes?: ContentTypeInfo[] | undefined;
    /** Default contents of document set.  */
    private _defaultContents?: DocumentSetContent[] | undefined;
    /** Indicates whether to add the name of the document set to each file name.  */
    private _propagateWelcomePageChanges?: boolean | undefined;
    /** The sharedColumns property  */
    private _sharedColumns?: ColumnDefinition[] | undefined;
    /** Add the name of the Document Set to each file name.  */
    private _shouldPrefixNameToFile?: boolean | undefined;
    /** The welcomePageColumns property  */
    private _welcomePageColumns?: ColumnDefinition[] | undefined;
    /** Welcome page absolute URL.  */
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
        this._additionalData = value;
    };
    /**
     * Gets the allowedContentTypes property value. Content types allowed in document set.
     * @returns a contentTypeInfo
     */
    public get allowedContentTypes() {
        return this._allowedContentTypes;
    };
    /**
     * Sets the allowedContentTypes property value. Content types allowed in document set.
     * @param value Value to set for the allowedContentTypes property.
     */
    public set allowedContentTypes(value: ContentTypeInfo[] | undefined) {
        this._allowedContentTypes = value;
    };
    /**
     * Instantiates a new documentSet and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the defaultContents property value. Default contents of document set.
     * @returns a documentSetContent
     */
    public get defaultContents() {
        return this._defaultContents;
    };
    /**
     * Sets the defaultContents property value. Default contents of document set.
     * @param value Value to set for the defaultContents property.
     */
    public set defaultContents(value: DocumentSetContent[] | undefined) {
        this._defaultContents = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedContentTypes": n => { this.allowedContentTypes = n.getCollectionOfObjectValues<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
            "defaultContents": n => { this.defaultContents = n.getCollectionOfObjectValues<DocumentSetContent>(createDocumentSetContentFromDiscriminatorValue); },
            "propagateWelcomePageChanges": n => { this.propagateWelcomePageChanges = n.getBooleanValue(); },
            "sharedColumns": n => { this.sharedColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
            "shouldPrefixNameToFile": n => { this.shouldPrefixNameToFile = n.getBooleanValue(); },
            "welcomePageColumns": n => { this.welcomePageColumns = n.getCollectionOfObjectValues<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
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
        this._propagateWelcomePageChanges = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ContentTypeInfo>("allowedContentTypes", this.allowedContentTypes);
        writer.writeCollectionOfObjectValues<DocumentSetContent>("defaultContents", this.defaultContents);
        writer.writeBooleanValue("propagateWelcomePageChanges", this.propagateWelcomePageChanges);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("sharedColumns", this.sharedColumns);
        writer.writeBooleanValue("shouldPrefixNameToFile", this.shouldPrefixNameToFile);
        writer.writeCollectionOfObjectValues<ColumnDefinition>("welcomePageColumns", this.welcomePageColumns);
        writer.writeStringValue("welcomePageUrl", this.welcomePageUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sharedColumns property value. The sharedColumns property
     * @returns a columnDefinition
     */
    public get sharedColumns() {
        return this._sharedColumns;
    };
    /**
     * Sets the sharedColumns property value. The sharedColumns property
     * @param value Value to set for the sharedColumns property.
     */
    public set sharedColumns(value: ColumnDefinition[] | undefined) {
        this._sharedColumns = value;
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
        this._shouldPrefixNameToFile = value;
    };
    /**
     * Gets the welcomePageColumns property value. The welcomePageColumns property
     * @returns a columnDefinition
     */
    public get welcomePageColumns() {
        return this._welcomePageColumns;
    };
    /**
     * Sets the welcomePageColumns property value. The welcomePageColumns property
     * @param value Value to set for the welcomePageColumns property.
     */
    public set welcomePageColumns(value: ColumnDefinition[] | undefined) {
        this._welcomePageColumns = value;
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
        this._welcomePageUrl = value;
    };
}
