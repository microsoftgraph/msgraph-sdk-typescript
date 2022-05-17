import {ColumnDefinition} from './columnDefinition';
import {ContentTypeInfo} from './contentTypeInfo';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {ColumnDefinitionImpl, ContentTypeInfoImpl, DocumentSetContentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DocumentSetImpl implements AdditionalDataHolder, DocumentSet, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** Content types allowed in document set. */
    allowedContentTypes?: ContentTypeInfo[] | undefined;
    /** Default contents of document set. */
    defaultContents?: DocumentSetContent[] | undefined;
    /** Indicates whether to add the name of the document set to each file name. */
    propagateWelcomePageChanges?: boolean | undefined;
    /** The sharedColumns property */
    sharedColumns?: ColumnDefinition[] | undefined;
    /** Add the name of the Document Set to each file name. */
    shouldPrefixNameToFile?: boolean | undefined;
    /** The welcomePageColumns property */
    welcomePageColumns?: ColumnDefinition[] | undefined;
    /** Welcome page absolute URL. */
    welcomePageUrl?: string | undefined;
    /**
     * Instantiates a new documentSet and sets the default values.
     * @param documentSetParameterValue 
     */
    public constructor(documentSetParameterValue?: DocumentSet | undefined) {
        this.additionalData = {};
        this.additionalData = documentSetParameterValue?.additionalData ? {} : documentSetParameterValue?.additionalData!
        this.allowedContentTypes = documentSetParameterValue?.allowedContentTypes ;
        this.defaultContents = documentSetParameterValue?.defaultContents ;
        this.propagateWelcomePageChanges = documentSetParameterValue?.propagateWelcomePageChanges ;
        this.sharedColumns = documentSetParameterValue?.sharedColumns ;
        this.shouldPrefixNameToFile = documentSetParameterValue?.shouldPrefixNameToFile ;
        this.welcomePageColumns = documentSetParameterValue?.welcomePageColumns ;
        this.welcomePageUrl = documentSetParameterValue?.welcomePageUrl ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedContentTypes){
        const allowedContentTypesArrValue: ContentTypeInfoImpl[] = []; this.allowedContentTypes?.forEach(element => {allowedContentTypesArrValue.push(new ContentTypeInfoImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeInfoImpl>("allowedContentTypes", allowedContentTypesArrValue);
        }
        if(this.defaultContents){
        const defaultContentsArrValue: DocumentSetContentImpl[] = []; this.defaultContents?.forEach(element => {defaultContentsArrValue.push(new DocumentSetContentImpl(element));});
        writer.writeCollectionOfObjectValues<DocumentSetContentImpl>("defaultContents", defaultContentsArrValue);
        }
        if(this.propagateWelcomePageChanges){
        if(this.propagateWelcomePageChanges)
        writer.writeBooleanValue("propagateWelcomePageChanges", this.propagateWelcomePageChanges);
        }
        if(this.sharedColumns){
        const sharedColumnsArrValue: ColumnDefinitionImpl[] = []; this.sharedColumns?.forEach(element => {sharedColumnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("sharedColumns", sharedColumnsArrValue);
        }
        if(this.shouldPrefixNameToFile){
        if(this.shouldPrefixNameToFile)
        writer.writeBooleanValue("shouldPrefixNameToFile", this.shouldPrefixNameToFile);
        }
        if(this.welcomePageColumns){
        const welcomePageColumnsArrValue: ColumnDefinitionImpl[] = []; this.welcomePageColumns?.forEach(element => {welcomePageColumnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("welcomePageColumns", welcomePageColumnsArrValue);
        }
        if(this.welcomePageUrl){
        if(this.welcomePageUrl)
        writer.writeStringValue("welcomePageUrl", this.welcomePageUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
