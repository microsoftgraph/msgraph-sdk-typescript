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

/** Provides operations to manage the collection of application entities. */
export class ContentTypeImpl extends EntityImpl implements ContentType {
    /** List of canonical URLs for hub sites with which this content type is associated to. This will contain all hubsites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites. */
    private _associatedHubsUrls?: string[] | undefined;
    /** Parent contentType from which this content type is derived. */
    private _base?: ContentType | undefined;
    /** The collection of content types that are ancestors of this content type. */
    private _baseTypes?: ContentType[] | undefined;
    /** The collection of columns that are required by this content type */
    private _columnLinks?: ColumnLink[] | undefined;
    /** Column order information in a content type. */
    private _columnPositions?: ColumnDefinition[] | undefined;
    /** The collection of column definitions for this contentType. */
    private _columns?: ColumnDefinition[] | undefined;
    /** The descriptive text for the item. */
    private _description?: string | undefined;
    /** Document Set metadata. */
    private _documentSet?: DocumentSet | undefined;
    /** Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type. */
    private _documentTemplate?: DocumentSetContent | undefined;
    /** The name of the group this content type belongs to. Helps organize related content types. */
    private _group?: string | undefined;
    /** Indicates whether the content type is hidden in the list's 'New' menu. */
    private _hidden?: boolean | undefined;
    /** If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined. */
    private _inheritedFrom?: ItemReference | undefined;
    /** Specifies if a content type is a built-in content type. */
    private _isBuiltIn?: boolean | undefined;
    /** The name of the content type. */
    private _name?: string | undefined;
    /** Specifies the order in which the content type appears in the selection UI. */
    private _order?: ContentTypeOrder | undefined;
    /** The unique identifier of the content type. */
    private _parentId?: string | undefined;
    /** If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type. */
    private _propagateChanges?: boolean | undefined;
    /** If true, the content type cannot be modified unless this value is first set to false. */
    private _readOnly?: boolean | undefined;
    /** If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types. */
    private _sealed?: boolean | undefined;
    /**
     * Gets the associatedHubsUrls property value. List of canonical URLs for hub sites with which this content type is associated to. This will contain all hubsites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.
     * @returns a string
     */
    public get associatedHubsUrls() {
        return this._associatedHubsUrls;
    };
    /**
     * Sets the associatedHubsUrls property value. List of canonical URLs for hub sites with which this content type is associated to. This will contain all hubsites where this content type is queued to be enforced or is already enforced. Enforcing a content type means that the content type will be applied to the lists in the enforced sites.
     * @param value Value to set for the associatedHubsUrls property.
     */
    public set associatedHubsUrls(value: string[] | undefined) {
        if(value) {
            this._associatedHubsUrls = value;
        }
    };
    /**
     * Gets the base property value. Parent contentType from which this content type is derived.
     * @returns a ContentTypeInterface
     */
    public get base() {
        return this._base;
    };
    /**
     * Sets the base property value. Parent contentType from which this content type is derived.
     * @param value Value to set for the base property.
     */
    public set base(value: ContentType | undefined) {
        if(value) {
            this._base = value instanceof ContentTypeImpl? value as ContentTypeImpl: new ContentTypeImpl(value);
        }
    };
    /**
     * Gets the baseTypes property value. The collection of content types that are ancestors of this content type.
     * @returns a ContentTypeInterface
     */
    public get baseTypes() {
        return this._baseTypes;
    };
    /**
     * Sets the baseTypes property value. The collection of content types that are ancestors of this content type.
     * @param value Value to set for the baseTypes property.
     */
    public set baseTypes(value: ContentType[] | undefined) {
        if(value) {
            const baseTypesArrValue: ContentTypeImpl[] = [];
            this.baseTypes?.forEach(element => {
                baseTypesArrValue.push((element instanceof ContentTypeImpl? element as ContentTypeImpl:new ContentTypeImpl(element)));
            });
            this._baseTypes = baseTypesArrValue;
        }
    };
    /**
     * Gets the columnLinks property value. The collection of columns that are required by this content type
     * @returns a ColumnLinkInterface
     */
    public get columnLinks() {
        return this._columnLinks;
    };
    /**
     * Sets the columnLinks property value. The collection of columns that are required by this content type
     * @param value Value to set for the columnLinks property.
     */
    public set columnLinks(value: ColumnLink[] | undefined) {
        if(value) {
            const columnLinksArrValue: ColumnLinkImpl[] = [];
            this.columnLinks?.forEach(element => {
                columnLinksArrValue.push((element instanceof ColumnLinkImpl? element as ColumnLinkImpl:new ColumnLinkImpl(element)));
            });
            this._columnLinks = columnLinksArrValue;
        }
    };
    /**
     * Gets the columnPositions property value. Column order information in a content type.
     * @returns a ColumnDefinitionInterface
     */
    public get columnPositions() {
        return this._columnPositions;
    };
    /**
     * Sets the columnPositions property value. Column order information in a content type.
     * @param value Value to set for the columnPositions property.
     */
    public set columnPositions(value: ColumnDefinition[] | undefined) {
        if(value) {
            const columnPositionsArrValue: ColumnDefinitionImpl[] = [];
            this.columnPositions?.forEach(element => {
                columnPositionsArrValue.push((element instanceof ColumnDefinitionImpl? element as ColumnDefinitionImpl:new ColumnDefinitionImpl(element)));
            });
            this._columnPositions = columnPositionsArrValue;
        }
    };
    /**
     * Gets the columns property value. The collection of column definitions for this contentType.
     * @returns a ColumnDefinitionInterface
     */
    public get columns() {
        return this._columns;
    };
    /**
     * Sets the columns property value. The collection of column definitions for this contentType.
     * @param value Value to set for the columns property.
     */
    public set columns(value: ColumnDefinition[] | undefined) {
        if(value) {
            const columnsArrValue: ColumnDefinitionImpl[] = [];
            this.columns?.forEach(element => {
                columnsArrValue.push((element instanceof ColumnDefinitionImpl? element as ColumnDefinitionImpl:new ColumnDefinitionImpl(element)));
            });
            this._columns = columnsArrValue;
        }
    };
    /**
     * Instantiates a new contentType and sets the default values.
     * @param contentTypeParameterValue 
     */
    public constructor(contentTypeParameterValue?: ContentType | undefined) {
        super(contentTypeParameterValue);
        this._associatedHubsUrls = contentTypeParameterValue?.associatedHubsUrls;
        this._base = contentTypeParameterValue?.base;
        this._baseTypes = contentTypeParameterValue?.baseTypes;
        this._columnLinks = contentTypeParameterValue?.columnLinks;
        this._columnPositions = contentTypeParameterValue?.columnPositions;
        this._columns = contentTypeParameterValue?.columns;
        this._description = contentTypeParameterValue?.description;
        this._documentSet = contentTypeParameterValue?.documentSet;
        this._documentTemplate = contentTypeParameterValue?.documentTemplate;
        this._group = contentTypeParameterValue?.group;
        this._hidden = contentTypeParameterValue?.hidden;
        this._inheritedFrom = contentTypeParameterValue?.inheritedFrom;
        this._isBuiltIn = contentTypeParameterValue?.isBuiltIn;
        this._name = contentTypeParameterValue?.name;
        this._order = contentTypeParameterValue?.order;
        this._parentId = contentTypeParameterValue?.parentId;
        this._propagateChanges = contentTypeParameterValue?.propagateChanges;
        this._readOnly = contentTypeParameterValue?.readOnly;
        this._sealed = contentTypeParameterValue?.sealed;
    };
    /**
     * Gets the description property value. The descriptive text for the item.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The descriptive text for the item.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the documentSet property value. Document Set metadata.
     * @returns a DocumentSetInterface
     */
    public get documentSet() {
        return this._documentSet;
    };
    /**
     * Sets the documentSet property value. Document Set metadata.
     * @param value Value to set for the documentSet property.
     */
    public set documentSet(value: DocumentSet | undefined) {
        if(value) {
            this._documentSet = value instanceof DocumentSetImpl? value as DocumentSetImpl: new DocumentSetImpl(value);
        }
    };
    /**
     * Gets the documentTemplate property value. Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.
     * @returns a DocumentSetContentInterface
     */
    public get documentTemplate() {
        return this._documentTemplate;
    };
    /**
     * Sets the documentTemplate property value. Document template metadata. To make sure that documents have consistent content across a site and its subsites, you can associate a Word, Excel, or PowerPoint template with a site content type.
     * @param value Value to set for the documentTemplate property.
     */
    public set documentTemplate(value: DocumentSetContent | undefined) {
        if(value) {
            this._documentTemplate = value instanceof DocumentSetContentImpl? value as DocumentSetContentImpl: new DocumentSetContentImpl(value);
        }
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
     * Gets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @returns a string
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The name of the group this content type belongs to. Helps organize related content types.
     * @param value Value to set for the group property.
     */
    public set group(value: string | undefined) {
        if(value) {
            this._group = value;
        }
    };
    /**
     * Gets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @returns a boolean
     */
    public get hidden() {
        return this._hidden;
    };
    /**
     * Sets the hidden property value. Indicates whether the content type is hidden in the list's 'New' menu.
     * @param value Value to set for the hidden property.
     */
    public set hidden(value: boolean | undefined) {
        if(value) {
            this._hidden = value;
        }
    };
    /**
     * Gets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @returns a ItemReferenceInterface
     */
    public get inheritedFrom() {
        return this._inheritedFrom;
    };
    /**
     * Sets the inheritedFrom property value. If this content type is inherited from another scope (like a site), provides a reference to the item where the content type is defined.
     * @param value Value to set for the inheritedFrom property.
     */
    public set inheritedFrom(value: ItemReference | undefined) {
        if(value) {
            this._inheritedFrom = value instanceof ItemReferenceImpl? value as ItemReferenceImpl: new ItemReferenceImpl(value);
        }
    };
    /**
     * Gets the isBuiltIn property value. Specifies if a content type is a built-in content type.
     * @returns a boolean
     */
    public get isBuiltIn() {
        return this._isBuiltIn;
    };
    /**
     * Sets the isBuiltIn property value. Specifies if a content type is a built-in content type.
     * @param value Value to set for the isBuiltIn property.
     */
    public set isBuiltIn(value: boolean | undefined) {
        if(value) {
            this._isBuiltIn = value;
        }
    };
    /**
     * Gets the name property value. The name of the content type.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the content type.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
    };
    /**
     * Gets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @returns a ContentTypeOrderInterface
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. Specifies the order in which the content type appears in the selection UI.
     * @param value Value to set for the order property.
     */
    public set order(value: ContentTypeOrder | undefined) {
        if(value) {
            this._order = value instanceof ContentTypeOrderImpl? value as ContentTypeOrderImpl: new ContentTypeOrderImpl(value);
        }
    };
    /**
     * Gets the parentId property value. The unique identifier of the content type.
     * @returns a string
     */
    public get parentId() {
        return this._parentId;
    };
    /**
     * Sets the parentId property value. The unique identifier of the content type.
     * @param value Value to set for the parentId property.
     */
    public set parentId(value: string | undefined) {
        if(value) {
            this._parentId = value;
        }
    };
    /**
     * Gets the propagateChanges property value. If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.
     * @returns a boolean
     */
    public get propagateChanges() {
        return this._propagateChanges;
    };
    /**
     * Sets the propagateChanges property value. If true, any changes made to the content type will be pushed to inherited content types and lists that implement the content type.
     * @param value Value to set for the propagateChanges property.
     */
    public set propagateChanges(value: boolean | undefined) {
        if(value) {
            this._propagateChanges = value;
        }
    };
    /**
     * Gets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
     * @returns a boolean
     */
    public get readOnly() {
        return this._readOnly;
    };
    /**
     * Sets the readOnly property value. If true, the content type cannot be modified unless this value is first set to false.
     * @param value Value to set for the readOnly property.
     */
    public set readOnly(value: boolean | undefined) {
        if(value) {
            this._readOnly = value;
        }
    };
    /**
     * Gets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @returns a boolean
     */
    public get sealed() {
        return this._sealed;
    };
    /**
     * Sets the sealed property value. If true, the content type cannot be modified by users or through push-down operations. Only site collection administrators can seal or unseal content types.
     * @param value Value to set for the sealed property.
     */
    public set sealed(value: boolean | undefined) {
        if(value) {
            this._sealed = value;
        }
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
            writer.writeObjectValue<ContentTypeImpl>("base", (this.base instanceof ContentTypeImpl? this.base as ContentTypeImpl: new ContentTypeImpl(this.base)));
        }
        if(this.baseTypes && this.baseTypes.length != 0){        const baseTypesArrValue: ContentTypeImpl[] = [];
        this.baseTypes?.forEach(element => {
            baseTypesArrValue.push((element instanceof ContentTypeImpl? element as ContentTypeImpl:new ContentTypeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ContentTypeImpl>("baseTypes", baseTypesArrValue);
        }
        if(this.columnLinks && this.columnLinks.length != 0){        const columnLinksArrValue: ColumnLinkImpl[] = [];
        this.columnLinks?.forEach(element => {
            columnLinksArrValue.push((element instanceof ColumnLinkImpl? element as ColumnLinkImpl:new ColumnLinkImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnLinkImpl>("columnLinks", columnLinksArrValue);
        }
        if(this.columnPositions && this.columnPositions.length != 0){        const columnPositionsArrValue: ColumnDefinitionImpl[] = [];
        this.columnPositions?.forEach(element => {
            columnPositionsArrValue.push((element instanceof ColumnDefinitionImpl? element as ColumnDefinitionImpl:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columnPositions", columnPositionsArrValue);
        }
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = [];
        this.columns?.forEach(element => {
            columnsArrValue.push((element instanceof ColumnDefinitionImpl? element as ColumnDefinitionImpl:new ColumnDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.documentSet){
            writer.writeObjectValue<DocumentSetImpl>("documentSet", (this.documentSet instanceof DocumentSetImpl? this.documentSet as DocumentSetImpl: new DocumentSetImpl(this.documentSet)));
        }
        if(this.documentTemplate){
            writer.writeObjectValue<DocumentSetContentImpl>("documentTemplate", (this.documentTemplate instanceof DocumentSetContentImpl? this.documentTemplate as DocumentSetContentImpl: new DocumentSetContentImpl(this.documentTemplate)));
        }
        if(this.group){
            writer.writeStringValue("group", this.group);
        }
        if(this.hidden){
            writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.inheritedFrom){
            writer.writeObjectValue<ItemReferenceImpl>("inheritedFrom", (this.inheritedFrom instanceof ItemReferenceImpl? this.inheritedFrom as ItemReferenceImpl: new ItemReferenceImpl(this.inheritedFrom)));
        }
        if(this.isBuiltIn){
            writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        if(this.order){
            writer.writeObjectValue<ContentTypeOrderImpl>("order", (this.order instanceof ContentTypeOrderImpl? this.order as ContentTypeOrderImpl: new ContentTypeOrderImpl(this.order)));
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
