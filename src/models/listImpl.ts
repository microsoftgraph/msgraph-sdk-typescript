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
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ListImpl extends BaseItemImpl implements List {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
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
        super(listParameterValue);
        this.additionalData = listParameterValue?.additionalData ? listParameterValue?.additionalData! : {};
        const columnsArrValue: ColumnDefinitionImpl[] = []; listParameterValue.columns?.forEach(element => {columnsArrValue.push(element instanceof ColumnDefinitionImpl? element : new ColumnDefinitionImpl(element));});
        this.columns = columnsArrValue;
        const contentTypesArrValue: ContentTypeImpl[] = []; listParameterValue.contentTypes?.forEach(element => {contentTypesArrValue.push(element instanceof ContentTypeImpl? element : new ContentTypeImpl(element));});
        this.contentTypes = contentTypesArrValue;
        this.displayName = listParameterValue?.displayName;
        this.drive = listParameterValue?.drive instanceof DriveImpl? listParameterValue?.drive:new DriveImpl(listParameterValue?.drive);
        const itemsArrValue: ListItemImpl[] = []; listParameterValue.items?.forEach(element => {itemsArrValue.push(element instanceof ListItemImpl? element : new ListItemImpl(element));});
        this.items = itemsArrValue;
        this.list = listParameterValue?.list instanceof ListInfoImpl? listParameterValue?.list:new ListInfoImpl(listParameterValue?.list);
        const operationsArrValue: RichLongRunningOperationImpl[] = []; listParameterValue.operations?.forEach(element => {operationsArrValue.push(element instanceof RichLongRunningOperationImpl? element : new RichLongRunningOperationImpl(element));});
        this.operations = operationsArrValue;
        this.sharepointIds = listParameterValue?.sharepointIds instanceof SharepointIdsImpl? listParameterValue?.sharepointIds:new SharepointIdsImpl(listParameterValue?.sharepointIds);
        const subscriptionsArrValue: SubscriptionImpl[] = []; listParameterValue.subscriptions?.forEach(element => {subscriptionsArrValue.push(element instanceof SubscriptionImpl? element : new SubscriptionImpl(element));});
        this.subscriptions = subscriptionsArrValue;
        this.system = listParameterValue?.system instanceof SystemFacetImpl? listParameterValue?.system:new SystemFacetImpl(listParameterValue?.system);
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
        if(this.columns && this.columns.length != 0){        const columnsArrValue: ColumnDefinitionImpl[] = []; this.columns?.forEach(element => {columnsArrValue.push(element instanceof ColumnDefinitionImpl? element : new ColumnDefinitionImpl(element));});
            writer.writeCollectionOfObjectValues<ColumnDefinitionImpl>("columns", columnsArrValue);
        }
        if(this.contentTypes && this.contentTypes.length != 0){        const contentTypesArrValue: ContentTypeImpl[] = []; this.contentTypes?.forEach(element => {contentTypesArrValue.push(element instanceof ContentTypeImpl? element : new ContentTypeImpl(element));});
            writer.writeCollectionOfObjectValues<ContentTypeImpl>("contentTypes", contentTypesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.drive){
            writer.writeObjectValue<DriveImpl>("drive", new DriveImpl(this.drive));
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: ListItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(element instanceof ListItemImpl? element : new ListItemImpl(element));});
            writer.writeCollectionOfObjectValues<ListItemImpl>("items", itemsArrValue);
        }
        if(this.list){
            writer.writeObjectValue<ListInfoImpl>("list", new ListInfoImpl(this.list));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: RichLongRunningOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(element instanceof RichLongRunningOperationImpl? element : new RichLongRunningOperationImpl(element));});
            writer.writeCollectionOfObjectValues<RichLongRunningOperationImpl>("operations", operationsArrValue);
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.subscriptions && this.subscriptions.length != 0){        const subscriptionsArrValue: SubscriptionImpl[] = []; this.subscriptions?.forEach(element => {subscriptionsArrValue.push(element instanceof SubscriptionImpl? element : new SubscriptionImpl(element));});
            writer.writeCollectionOfObjectValues<SubscriptionImpl>("subscriptions", subscriptionsArrValue);
        }
        if(this.system){
            writer.writeObjectValue<SystemFacetImpl>("system", new SystemFacetImpl(this.system));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
