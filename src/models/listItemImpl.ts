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

/** Provides operations to manage the drive singleton. */
export class ListItemImpl extends BaseItemImpl implements ListItem, Parsable {
    /** Analytics about the view activities that took place on this item. */
    public analytics?: ItemAnalytics | undefined;
    /** The content type of this list item */
    public contentType?: ContentTypeInfo | undefined;
    /** For document libraries, the driveItem relationship exposes the listItem as a [driveItem][] */
    public driveItem?: DriveItem | undefined;
    /** The values of the columns set on this list item. */
    public fields?: FieldValueSet | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** The list of previous versions of the list item. */
    public versions?: ListItemVersion[] | undefined;
    /**
     * Instantiates a new listItem and sets the default values.
     * @param listItemParameterValue 
     */
    public constructor(listItemParameterValue?: ListItem | undefined) {
        super();
        this.analytics = listItemParameterValue?.analytics ;
        this.contentType = listItemParameterValue?.contentType ;
        this.driveItem = listItemParameterValue?.driveItem ;
        this.fields = listItemParameterValue?.fields ;
        this.sharepointIds = listItemParameterValue?.sharepointIds ;
        this.versions = listItemParameterValue?.versions ;
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
        writer.writeObjectValue<ItemAnalyticsImpl>("analytics", new ItemAnalyticsImpl(this.analytics));
        }
        if(this.contentType){
        writer.writeObjectValue<ContentTypeInfoImpl>("contentType", new ContentTypeInfoImpl(this.contentType));
        }
        if(this.driveItem){
        writer.writeObjectValue<DriveItemImpl>("driveItem", new DriveItemImpl(this.driveItem));
        }
        if(this.fields){
        writer.writeObjectValue<FieldValueSetImpl>("fields", new FieldValueSetImpl(this.fields));
        }
        if(this.sharepointIds){
        writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.versions && this.versions.length != 0){        const versionsArrValue: ListItemVersionImpl[] = []; this.versions?.forEach(element => {versionsArrValue.push(new ListItemVersionImpl(element));});
        writer.writeCollectionOfObjectValues<ListItemVersionImpl>("versions", versionsArrValue);
        }
    };
}
