import {BaseItem} from './baseItem';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EntityImpl, IdentitySetImpl, ItemReferenceImpl, UserImpl} from './index';
import {ItemReference} from './itemReference';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class BaseItemImpl extends EntityImpl implements BaseItem, Parsable {
    /** Identity of the user, device, or application which created the item. Read-only. */
    public createdBy?: IdentitySet | undefined;
    /** Identity of the user who created the item. Read-only. */
    public createdByUser?: User | undefined;
    /** Date and time of item creation. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Provides a user-visible description of the item. Optional. */
    public description?: string | undefined;
    /** ETag for the item. Read-only. */
    public eTag?: string | undefined;
    /** Identity of the user, device, and application which last modified the item. Read-only. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Identity of the user who last modified the item. Read-only. */
    public lastModifiedByUser?: User | undefined;
    /** Date and time the item was last modified. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** The name of the item. Read-write. */
    public name?: string | undefined;
    /** Parent information, if the item has a parent. Read-write. */
    public parentReference?: ItemReference | undefined;
    /** URL that displays the resource in the browser. Read-only. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new baseItem and sets the default values.
     * @param baseItemParameterValue 
     */
    public constructor(baseItemParameterValue?: BaseItem | undefined) {
        super();
        this.createdBy = baseItemParameterValue?.createdBy ;
        this.createdByUser = baseItemParameterValue?.createdByUser ;
        this.createdDateTime = baseItemParameterValue?.createdDateTime ;
        this.description = baseItemParameterValue?.description ;
        this.eTag = baseItemParameterValue?.eTag ;
        this.lastModifiedBy = baseItemParameterValue?.lastModifiedBy ;
        this.lastModifiedByUser = baseItemParameterValue?.lastModifiedByUser ;
        this.lastModifiedDateTime = baseItemParameterValue?.lastModifiedDateTime ;
        this.name = baseItemParameterValue?.name ;
        this.parentReference = baseItemParameterValue?.parentReference ;
        this.webUrl = baseItemParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdByUser": n => { this.createdByUser = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "eTag": n => { this.eTag = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedByUser": n => { this.lastModifiedByUser = n.getObjectValue<UserImpl>(createUserFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdByUser){
        writer.writeObjectValue<UserImpl>("createdByUser", new UserImpl(this.createdByUser));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.eTag){
        writer.writeStringValue("eTag", this.eTag);
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedByUser){
        writer.writeObjectValue<UserImpl>("lastModifiedByUser", new UserImpl(this.lastModifiedByUser));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.parentReference){
        writer.writeObjectValue<ItemReferenceImpl>("parentReference", new ItemReferenceImpl(this.parentReference));
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
