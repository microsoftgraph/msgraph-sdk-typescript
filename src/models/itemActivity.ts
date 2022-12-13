import {createAccessActionFromDiscriminatorValue} from './createAccessActionFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {AccessAction, DriveItem, Entity, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreement entities.
 */
export class ItemActivity extends Entity implements Parsable {
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
     * @returns a accessAction
     */
    public get access() {
        return this._access;
    };
    /**
     * Sets the access property value. An item was accessed.
     * @param value Value to set for the access property.
     */
    public set access(value: AccessAction | undefined) {
        this._access = value;
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
        this._activityDateTime = value;
    };
    /**
     * Gets the actor property value. Identity of who performed the action. Read-only.
     * @returns a identitySet
     */
    public get actor() {
        return this._actor;
    };
    /**
     * Sets the actor property value. Identity of who performed the action. Read-only.
     * @param value Value to set for the actor property.
     */
    public set actor(value: IdentitySet | undefined) {
        this._actor = value;
    };
    /**
     * Instantiates a new itemActivity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the driveItem property value. Exposes the driveItem that was the target of this activity.
     * @returns a driveItem
     */
    public get driveItem() {
        return this._driveItem;
    };
    /**
     * Sets the driveItem property value. Exposes the driveItem that was the target of this activity.
     * @param value Value to set for the driveItem property.
     */
    public set driveItem(value: DriveItem | undefined) {
        this._driveItem = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "access": n => { this.access = n.getObjectValue<AccessAction>(createAccessActionFromDiscriminatorValue); },
            "activityDateTime": n => { this.activityDateTime = n.getDateValue(); },
            "actor": n => { this.actor = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "driveItem": n => { this.driveItem = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessAction>("access", this.access);
        writer.writeDateValue("activityDateTime", this.activityDateTime);
        writer.writeObjectValue<IdentitySet>("actor", this.actor);
        writer.writeObjectValue<DriveItem>("driveItem", this.driveItem);
    };
}
