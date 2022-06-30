import {ContentTypeInfo} from './contentTypeInfo';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createFieldValueSetFromDiscriminatorValue} from './createFieldValueSetFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemVersionFromDiscriminatorValue} from './createListItemVersionFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {FieldValueSet} from './fieldValueSet';
import {BaseItemImpl, ContentTypeInfoImpl, DriveItemImpl, FieldValueSetImpl, ItemAnalyticsImpl, ListItemVersionImpl, SharepointIdsImpl} from './index';
import {ItemAnalytics} from './itemAnalytics';
import {ListItem} from './listItem';
import {ListItemVersion} from './listItemVersion';
import {SharepointIds} from './sharepointIds';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ListItemImpl extends BaseItemImpl implements ListItem {
    /** Analytics about the view activities that took place on this item. */
    private _analytics?: ItemAnalytics | undefined;
    /** The content type of this list item */
    private _contentType?: ContentTypeInfo | undefined;
    /** For document libraries, the driveItem relationship exposes the listItem as a [driveItem][] */
    private _driveItem?: DriveItem | undefined;
    /** The values of the columns set on this list item. */
    private _fields?: FieldValueSet | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    private _sharepointIds?: SharepointIds | undefined;
    /** The list of previous versions of the list item. */
    private _versions?: ListItemVersion[] | undefined;
    /**
     * Gets the analytics property value. Analytics about the view activities that took place on this item.
     * @returns a ItemAnalyticsInterface
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place on this item.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        if(value) {
            this._analytics = value instanceof ItemAnalyticsImpl? value : new ItemAnalyticsImpl(value);
        }
    };
    /**
     * Instantiates a new listItem and sets the default values.
     * @param listItemParameterValue 
     */
    public constructor(listItemParameterValue?: ListItem | undefined) {
        super(listItemParameterValue);
        this._analytics = listItemParameterValue?.analytics;
        this._contentType = listItemParameterValue?.contentType;
        this._driveItem = listItemParameterValue?.driveItem;
        this._fields = listItemParameterValue?.fields;
        this._sharepointIds = listItemParameterValue?.sharepointIds;
        this._versions = listItemParameterValue?.versions;
    };
    /**
     * Gets the contentType property value. The content type of this list item
     * @returns a ContentTypeInfoInterface
     */
    public get contentType() {
        return this._contentType;
    };
    /**
     * Sets the contentType property value. The content type of this list item
     * @param value Value to set for the contentType property.
     */
    public set contentType(value: ContentTypeInfo | undefined) {
        if(value) {
            this._contentType = value instanceof ContentTypeInfoImpl? value : new ContentTypeInfoImpl(value);
        }
    };
    /**
     * Gets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @returns a DriveItemInterface
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        if(value) {
            this._driveItem = value instanceof DriveItemImpl? value : new DriveItemImpl(value);
        }
    };
    /**
     * Gets the fields property value. The values of the columns set on this list item.
     * @returns a FieldValueSetInterface
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The values of the columns set on this list item.
     * @param value Value to set for the fields property.
     */
    public set fields(value: FieldValueSet | undefined) {
        if(value) {
            this._fields = value instanceof FieldValueSetImpl? value : new FieldValueSetImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "analytics": n => { this.analytics = n.getObjectValue<ItemAnalyticsImpl>(createItemAnalyticsFromDiscriminatorValue); },
            "contentType": n => { this.contentType = n.getObjectValue<ContentTypeInfoImpl>(createContentTypeInfoFromDiscriminatorValue); },
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "fields": n => { this.fields = n.getObjectValue<FieldValueSetImpl>(createFieldValueSetFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "versions": n => { this.versions = n.getCollectionOfObjectValues<ListItemVersionImpl>(createListItemVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.analytics){
            writer.writeObjectValue<ItemAnalyticsImpl>("analytics", (!this.analytics || this.analytics instanceof ItemAnalyticsImpl? this.analytics : new ItemAnalyticsImpl(this.analytics)));
        }
        if(this.contentType){
            writer.writeObjectValue<ContentTypeInfoImpl>("contentType", (!this.contentType || this.contentType instanceof ContentTypeInfoImpl? this.contentType : new ContentTypeInfoImpl(this.contentType)));
        }
        if(this.driveItem){
            writer.writeObjectValue<DriveItemImpl>("driveItem", (!this.driveItem || this.driveItem instanceof DriveItemImpl? this.driveItem : new DriveItemImpl(this.driveItem)));
        }
        if(this.fields){
            writer.writeObjectValue<FieldValueSetImpl>("fields", (!this.fields || this.fields instanceof FieldValueSetImpl? this.fields : new FieldValueSetImpl(this.fields)));
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", (!this.sharepointIds || this.sharepointIds instanceof SharepointIdsImpl? this.sharepointIds : new SharepointIdsImpl(this.sharepointIds)));
        }
        if(this.versions && this.versions.length != 0){        const versionsArrValue: ListItemVersionImpl[] = [];
        this.versions?.forEach(element => {
            versionsArrValue.push((element instanceof ListItemVersionImpl? element:new ListItemVersionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ListItemVersionImpl>("versions", versionsArrValue);
        }
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a SharepointIdsInterface
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        if(value) {
            this._sharepointIds = value instanceof SharepointIdsImpl? value : new SharepointIdsImpl(value);
        }
    };
    /**
     * Gets the versions property value. The list of previous versions of the list item.
     * @returns a ListItemVersionInterface
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The list of previous versions of the list item.
     * @param value Value to set for the versions property.
     */
    public set versions(value: ListItemVersion[] | undefined) {
        if(value) {
            const versionsArrValue: ListItemVersionImpl[] = [];
            this.versions?.forEach(element => {
                versionsArrValue.push((element instanceof ListItemVersionImpl? element:new ListItemVersionImpl(element)));
            });
            this._versions = versionsArrValue;
        }
    };
}
