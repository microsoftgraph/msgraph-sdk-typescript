import {AccessAction} from './accessAction';
import {createAccessActionFromDiscriminatorValue} from './createAccessActionFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {AccessActionImpl, DriveItemImpl, EntityImpl, IdentitySetImpl} from './index';
import {ItemActivity} from './itemActivity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ItemActivityImpl extends EntityImpl implements ItemActivity {
    /** An item was accessed. */
    private _access?: AccessAction | undefined;
    /** Details about when the activity took place. Read-only. */
    private _activityDateTime?: Date | undefined;
    /** Identity of who performed the action. Read-only. */
    private _actor?: IdentitySet | undefined;
    /** Exposes the driveItem that was the target of this activity. */
    private _driveItem?: DriveItem | undefined;
    /**
     * Gets the access property value. An item was accessed.
     * @returns a AccessActionInterface
     */
    public get access() {
        return this._access;
    };
    /**
     * Sets the access property value. An item was accessed.
     * @param value Value to set for the access property.
     */
    public set access(value: AccessAction | undefined) {
        if(value) {
            this._access = value instanceof AccessActionImpl? value : new AccessActionImpl(value);
        }
    };
    /**
     * Gets the activityDateTime property value. Details about when the activity took place. Read-only.
     * @returns a Date
     */
    public get activityDateTime() {
        return this._activityDateTime;
    };
    /**
     * Sets the activityDateTime property value. Details about when the activity took place. Read-only.
     * @param value Value to set for the activityDateTime property.
     */
    public set activityDateTime(value: Date | undefined) {
        if(value) {
            this._activityDateTime = value;
        }
    };
    /**
     * Gets the actor property value. Identity of who performed the action. Read-only.
     * @returns a IdentitySetInterface
     */
    public get actor() {
        return this._actor;
    };
    /**
     * Sets the actor property value. Identity of who performed the action. Read-only.
     * @param value Value to set for the actor property.
     */
    public set actor(value: IdentitySet | undefined) {
        if(value) {
            this._actor = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Instantiates a new itemActivity and sets the default values.
     * @param itemActivityParameterValue 
     */
    public constructor(itemActivityParameterValue?: ItemActivity | undefined) {
        super(itemActivityParameterValue);
        this._access = itemActivityParameterValue?.access;
        this._activityDateTime = itemActivityParameterValue?.activityDateTime;
        this._actor = itemActivityParameterValue?.actor;
        this._driveItem = itemActivityParameterValue?.driveItem;
    };
    /**
     * Gets the driveItem property value. Exposes the driveItem that was the target of this activity.
     * @returns a DriveItemInterface
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. Exposes the driveItem that was the target of this activity.
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        if(value) {
            this._driveItem = value instanceof DriveItemImpl? value : new DriveItemImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "access": n => { this.access = n.getObjectValue<AccessActionImpl>(createAccessActionFromDiscriminatorValue); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "actor": n => { this.actor = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.access){
            writer.writeObjectValue<AccessActionImpl>("access", (!this.access || this.access instanceof AccessActionImpl? this.access : new AccessActionImpl(this.access)));
        }
        if(this.activityDateTime){
            writer.writeDateValue("activityDateTime", this.activityDateTime);
        }
        if(this.actor){
            writer.writeObjectValue<IdentitySetImpl>("actor", (!this.actor || this.actor instanceof IdentitySetImpl? this.actor : new IdentitySetImpl(this.actor)));
        }
        if(this.driveItem){
            writer.writeObjectValue<DriveItemImpl>("driveItem", (!this.driveItem || this.driveItem instanceof DriveItemImpl? this.driveItem : new DriveItemImpl(this.driveItem)));
        }
    };
}
