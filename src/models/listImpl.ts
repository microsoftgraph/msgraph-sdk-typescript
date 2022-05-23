import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createContentTypeFromDiscriminatorValue} from './createContentTypeFromDiscriminatorValue';
import {createDriveFromDiscriminatorValue} from './createDriveFromDiscriminatorValue';
import {createListInfoFromDiscriminatorValue} from './createListInfoFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createRichLongRunningOperationFromDiscriminatorValue} from './createRichLongRunningOperationFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createSystemFacetFromDiscriminatorValue} from './createSystemFacetFromDiscriminatorValue';
import {Drive} from './drive';
import {BaseItemImpl, ColumnDefinitionImpl, ContentTypeImpl, DriveImpl, ListInfoImpl, ListItemImpl, RichLongRunningOperationImpl, SharepointIdsImpl, SubscriptionImpl, SystemFacetImpl} from './index';
import {List} from './list';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {SharepointIds} from './sharepointIds';
import {Subscription} from './subscription';
import {SystemFacet} from './systemFacet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ListImpl extends BaseItemImpl implements List, Parsable {
    /** The collection of field definitions for this list. */
    public columns?: ColumnDefinition[] | undefined;
    /** The collection of content types present in this list. */
    public contentTypes?: ContentType[] | undefined;
    /** The displayable title of the list. */
    public displayName?: string | undefined;
    /** Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem]. */
    public drive?: Drive | undefined;
    /** All items contained in the list. */
    public items?: ListItem[] | undefined;
    /** Provides additional details about the list. */
    public list?: ListInfo | undefined;
    /** The collection of long running operations for the list. */
    public operations?: RichLongRunningOperation[] | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** The set of subscriptions on the list. */
    public subscriptions?: Subscription[] | undefined;
    /** If present, indicates that this is a system-managed list. Read-only. */
    public system?: SystemFacet | undefined;
    /**
     * Instantiates a new list and sets the default values.
     * @param listParameterValue 
     */
    public constructor(listParameterValue?: List | undefined) {
        super();
        this.columns = listParameterValue?.columns ;
        this.contentTypes = listParameterValue?.contentTypes ;
        this.displayName = listParameterValue?.displayName ;
        this.drive = listParameterValue?.drive ;
        this.items = listParameterValue?.items ;
        this.list = listParameterValue?.list ;
        this.operations = listParameterValue?.operations ;
        this.sharepointIds = listParameterValue?.sharepointIds ;
        this.subscriptions = listParameterValue?.subscriptions ;
        this.system = listParameterValue?.system ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "columns": n => { this.columns = n.getCollectionOfObjectValues<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "contentTypes": n => { this.contentTypes = n.getCollectionOfObjectValues<ContentTypeImpl>(createContentTypeFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "drive": n => { this.drive = n.getObjectValue<DriveImpl>(createDriveFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<ListItemImpl>(createListItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListInfoImpl>(createListInfoFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<RichLongRunningOperationImpl>(createRichLongRunningOperationFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<SubscriptionImpl>(createSubscriptionFromDiscriminatorValue); },
            "system": n => { this.system = n.getObjectValue<SystemFacetImpl>(createSystemFacetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = []; this.columns?.forEach(element => {columnsArrValue.push(new ColumnDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.contentTypes && this.contentTypes.length != 0){        const contentTypesArrValue: ContentTypeImpl[] = []; this.contentTypes?.forEach(element => {contentTypesArrValue.push(new ContentTypeImpl(element));});
        writer.writeCollectionOfObjectValues<ContentTypeImpl>("contentTypes", contentTypesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
        writer.writeObjectValue<DriveImpl>("drive", new DriveImpl(this.drive));
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: ListItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(new ListItemImpl(element));});
        writer.writeCollectionOfObjectValues<ListItemImpl>("items", itemsArrValue);
        }
        if(this.list){
        writer.writeObjectValue<ListInfoImpl>("list", new ListInfoImpl(this.list));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: RichLongRunningOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new RichLongRunningOperationImpl(element));});
        writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("operations", operationsArrValue);
        }
        if(this.sharepointIds){
        writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.subscriptions && this.subscriptions.length != 0){        const subscriptionsArrValue: SubscriptionImpl[] = []; this.subscriptions?.forEach(element => {subscriptionsArrValue.push(new SubscriptionImpl(element));});
        writer.writeCollectionOfObjectValues<SubscriptionImpl>("subscriptions", subscriptionsArrValue);
        }
        if(this.system){
        writer.writeObjectValue<SystemFacetImpl>("system", new SystemFacetImpl(this.system));
        }
    };
}
