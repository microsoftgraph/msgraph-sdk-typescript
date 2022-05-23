import {ColumnDefinition} from './columnDefinition';
import {ColumnLink} from './columnLink';
import {ContentType} from './contentType';
import {ContentTypeOrder} from './contentTypeOrder';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createColumnLinkFromDiscriminatorValue} from './createColumnLinkFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createContentTypeOrderFromDiscriminatorValue} from './createContentTypeOrderFromDiscriminatorValue';
import {createDocumentSetContentFromDiscriminatorValue} from './createDocumentSetContentFromDiscriminatorValue';
import {createDocumentSetFromDiscriminatorValue} from './createDocumentSetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {DocumentSet} from './documentSet';
import {DocumentSetContent} from './documentSetContent';
import {ColumnDefinitionImpl, ColumnLinkImpl, ContentTypeOrderImpl, DocumentSetContentImpl, DocumentSetImpl, EntityImpl, ItemReferenceImpl} from './index';
import {ItemReference} from './itemReference';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ContentTypeImpl extends EntityImpl implements ContentType, Parsable {
    /** List of canonical URLs for hub sites with which this content type is associated to. This will contain all hubsites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites. */
    public associatedHubsUrls?: string[] | undefined;
    /** Parent contentType from which this content type is derived. */
    public base?: ContentType | undefined;
    /** The collection of content types that are ancestors of this content type. */
    public baseTypes?: ContentType[] | undefined;
    /** The collection of columns that are required by this content type */
    public columnLinks?: ColumnLink[] | undefined;
    /** Column order information in a content type. */
    public columnPositions?: ColumnDefinition[] | undefined;
    /** The collection of column definitions for this contentType. */
    public columns?: ColumnDefinition[] | undefined;
    /** The descriptive text for the item. */
    public description?: string | undefined;
    /** Document Set metadata. */
    public documentSet?: DocumentSet | undefined;
    /** Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type. */
    public documentTemplate?: DocumentSetContent | undefined;
    /** The name of the group this content type belongs to. Helps organize related content types. */
    public group?: string | undefined;
    /** Indicates whether the content type is hidden in the list's 'New' menu. */
    public hidden?: boolean | undefined;
    /** If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined. */
    public inheritedFrom?: ItemReference | undefined;
    /** Specifies if a content type is a built-in content type. */
    public isBuiltIn?: boolean | undefined;
    /** The name of the content type. */
    public name?: string | undefined;
    /** Specifies the order in which the content type appears in the selection UI. */
    public order?: ContentTypeOrder | undefined;
    /** The unique identifier of the content type. */
    public parentId?: string | undefined;
    /** If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type. */
    public propagateChanges?: boolean | undefined;
    /** If true, the content type cannot be modified unless this value is first set to false. */
    public readOnly?: boolean | undefined;
    /** If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types. */
    public sealed?: boolean | undefined;
    /**
     * Instantiates a new contentType and sets the default values.
     * @param contentTypeParameterValue 
     */
    public constructor(contentTypeParameterValue?: ContentType | undefined) {
        super();
        this.associatedHubsUrls = contentTypeParameterValue?.associatedHubsUrls ;
        this.base = contentTypeParameterValue?.base ;
        this.baseTypes = contentTypeParameterValue?.baseTypes ;
        this.columnLinks = contentTypeParameterValue?.columnLinks ;
        this.columnPositions = contentTypeParameterValue?.columnPositions ;
        this.columns = contentTypeParameterValue?.columns ;
        this.description = contentTypeParameterValue?.description ;
        this.documentSet = contentTypeParameterValue?.documentSet ;
        this.documentTemplate = contentTypeParameterValue?.documentTemplate ;
        this.group = contentTypeParameterValue?.group ;
        this.hidden = contentTypeParameterValue?.hidden ;
        this.inheritedFrom = contentTypeParameterValue?.inheritedFrom ;
        this.isBuiltIn = contentTypeParameterValue?.isBuiltIn ;
        this.name = contentTypeParameterValue?.name ;
        this.order = contentTypeParameterValue?.order ;
        this.parentId = contentTypeParameterValue?.parentId ;
        this.propagateChanges = contentTypeParameterValue?.propagateChanges ;
        this.readOnly = contentTypeParameterValue?.readOnly ;
        this.sealed = contentTypeParameterValue?.sealed ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "associatedHubsUrls": n => { this.associatedHubsUrls = n.getCollectionOfPrimitiveValues<string>(); },
            "base": n => { this.base = n.getObjectValue<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
            "baseTypes": n => { this.baseTypes = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
            "columnLinks": n => { this.columnLinks = n.getCollectionOfObjectValues<ColumnLinkImpl>(createColumnLinkFromDiscriminatorValue); },
            "columnPositions": n => { this.columnPositions = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "documentSet": n => { this.documentSet = n.getObjectValue<DocumentSetImpl>(createDocumentSetFromDiscriminatorValue); },
            "documentTemplate": n => { this.documentTemplate = n.getObjectValue<DocumentSetContentImpl>(createDocumentSetContentFromDiscriminatorValue); },
            "group": n => { this.group = n.getStringValue(); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "inheritedFrom": n => { this.inheritedFrom = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
            "isBuiltIn": n => { this.isBuiltIn = n.getBooleanValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "order": n => { this.order = n.getObjectValue<ContentTypeOrderImpl>(createContentTypeOrderFromDiscriminatorValue); },
            "parentId": n => { this.parentId = n.getStringValue(); },
            "propagateChanges": n => { this.propagateChanges = n.getBooleanValue(); },
            "readOnly": n => { this.readOnly = n.getBooleanValue(); },
            "sealed": n => { this.sealed = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.associatedHubsUrls){
        writer.writeCollectionOfPrimitiveValues<string>("associatedHubsUrls", this.associatedHubsUrls);
        }
        if(this.base){
        writer.writeObjectValue<ContentTypeImpl>("base", new ContentTypeImpl(this.base));
        }
        if(this.baseTypes && this.baseTypes.length != 0){        const baseTypesArrValue: ContentTypeImpl[] = []; this.baseTypes?.forEach(element => {baseTypesArrValue.push(new ContentTypeImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeImpl>("baseTypes", baseTypesArrValue);
        }
        if(this.columnLinks && this.columnLinks.length != 0){        const columnLinksArrValue: ColumnLinkImpl[] = []; this.columnLinks?.forEach(element => {columnLinksArrValue.push(new ColumnLinkImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnLinkImpl>("columnLinks", columnLinksArrValue);
        }
        if(this.columnPositions && this.columnPositions.length != 0){        const columnPositionsArrValue: ColumnDefinitionImpl[] = []; this.columnPositions?.forEach(element => {columnPositionsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columnPositions", columnPositionsArrValue);
        }
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = []; this.columns?.forEach(element => {columnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.documentSet){
        writer.writeObjectValue<DocumentSetImpl>("documentSet", new DocumentSetImpl(this.documentSet));
        }
        if(this.documentTemplate){
        writer.writeObjectValue<DocumentSetContentImpl>("documentTemplate", new DocumentSetContentImpl(this.documentTemplate));
        }
        if(this.group){
        writer.writeStringValue("group", this.group);
        }
        if(this.hidden){
        writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.inheritedFrom){
        writer.writeObjectValue<ItemReferenceImpl>("inheritedFrom", new ItemReferenceImpl(this.inheritedFrom));
        }
        if(this.isBuiltIn){
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.order){
        writer.writeObjectValue<ContentTypeOrderImpl>("order", new ContentTypeOrderImpl(this.order));
        }
        if(this.parentId){
        writer.writeStringValue("parentId", this.parentId);
        }
        if(this.propagateChanges){
        writer.writeBooleanValue("propagateChanges", this.propagateChanges);
        }
        if(this.readOnly){
        writer.writeBooleanValue("readOnly", this.readOnly);
        }
        if(this.sealed){
        writer.writeBooleanValue("sealed", this.sealed);
        }
    };
}
