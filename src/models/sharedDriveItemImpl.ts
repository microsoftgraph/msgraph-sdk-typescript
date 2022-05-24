import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createListFromDiscriminatorValue} from './createListFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createSiteFromDiscriminatorValue} from './createSiteFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {BaseItemImpl, DriveItemImpl, IdentitySetImpl, ListImpl, ListItemImpl, PermissionImpl, SiteImpl} from './index';
import {List} from './list';
import {ListItem} from './listItem';
import {Permission} from './permission';
import {SharedDriveItem} from './sharedDriveItem';
import {Site} from './site';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of sharedDriveItem entities. */
export class SharedDriveItemImpl extends BaseItemImpl implements Parsable, SharedDriveItem {
    /** Used to access the underlying driveItem */
    public driveItem?: DriveItem | undefined;
    /** All driveItems contained in the sharing root. This collection cannot be enumerated. */
    public items?: DriveItem[] | undefined;
    /** Used to access the underlying list */
    public list?: List | undefined;
    /** Used to access the underlying listItem */
    public listItem?: ListItem | undefined;
    /** Information about the owner of the shared item being referenced. */
    public owner?: IdentitySet | undefined;
    /** Used to access the permission representing the underlying sharing link */
    public permission?: Permission | undefined;
    /** Used to access the underlying driveItem. Deprecated -- use driveItem instead. */
    public root?: DriveItem | undefined;
    /** Used to access the underlying site */
    public site?: Site | undefined;
    /**
     * Instantiates a new sharedDriveItem and sets the default values.
     * @param sharedDriveItemParameterValue 
     */
    public constructor(sharedDriveItemParameterValue?: SharedDriveItem | undefined) {
        super();
        this.driveItem = sharedDriveItemParameterValue?.driveItem ;
        this.items = sharedDriveItemParameterValue?.items ;
        this.list = sharedDriveItemParameterValue?.list ;
        this.listItem = sharedDriveItemParameterValue?.listItem ;
        this.owner = sharedDriveItemParameterValue?.owner ;
        this.permission = sharedDriveItemParameterValue?.permission ;
        this.root = sharedDriveItemParameterValue?.root ;
        this.site = sharedDriveItemParameterValue?.site ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "items": n => { this.items = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "list": n => { this.list = n.getObjectValue<ListImpl>(createListFromDiscriminatorValue); },
            "listItem": n => { this.listItem = n.getObjectValue<ListItemImpl>(createListItemFromDiscriminatorValue); },
            "owner": n => { this.owner = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "permission": n => { this.permission = n.getObjectValue<PermissionImpl>(createPermissionFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "site": n => { this.site = n.getObjectValue<SiteImpl>(createSiteFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.driveItem){
        writer.writeObjectValue<DriveItemImpl>("driveItem", new DriveItemImpl(this.driveItem));
        }
        if(this.items && this.items.length != 0){        const itemsArrValue: DriveItemImpl[] = []; this.items?.forEach(element => {itemsArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("items", itemsArrValue);
        }
        if(this.list){
        writer.writeObjectValue<ListImpl>("list", new ListImpl(this.list));
        }
        if(this.listItem){
        writer.writeObjectValue<ListItemImpl>("listItem", new ListItemImpl(this.listItem));
        }
        if(this.owner){
        writer.writeObjectValue<IdentitySetImpl>("owner", new IdentitySetImpl(this.owner));
        }
        if(this.permission){
        writer.writeObjectValue<PermissionImpl>("permission", new PermissionImpl(this.permission));
        }
        if(this.root){
        writer.writeObjectValue<DriveItemImpl>("root", new DriveItemImpl(this.root));
        }
        if(this.site){
        writer.writeObjectValue<SiteImpl>("site", new SiteImpl(this.site));
        }
    };
}
