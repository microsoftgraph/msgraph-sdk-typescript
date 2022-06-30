import {createIncompleteDataFromDiscriminatorValue} from './createIncompleteDataFromDiscriminatorValue';
import {createItemActionStatFromDiscriminatorValue} from './createItemActionStatFromDiscriminatorValue';
import {createItemActivityFromDiscriminatorValue} from './createItemActivityFromDiscriminatorValue';
import {IncompleteData} from './incompleteData';
import {EntityImpl, IncompleteDataImpl, ItemActionStatImpl, ItemActivityImpl} from './index';
import {ItemActionStat} from './itemActionStat';
import {ItemActivity} from './itemActivity';
import {ItemActivityStat} from './itemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ItemActivityStatImpl extends EntityImpl implements ItemActivityStat {
    /** Statistics about the access actions in this interval. Read-only. */
    private _access?: ItemActionStat | undefined;
    /** Exposes the itemActivities represented in this itemActivityStat resource. */
    private _activities?: ItemActivity[] | undefined;
    /** Statistics about the create actions in this interval. Read-only. */
    private _create?: ItemActionStat | undefined;
    /** Statistics about the delete actions in this interval. Read-only. */
    private _delete?: ItemActionStat | undefined;
    /** Statistics about the edit actions in this interval. Read-only. */
    private _edit?: ItemActionStat | undefined;
    /** When the interval ends. Read-only. */
    private _endDateTime?: Date | undefined;
    /** Indicates that the statistics in this interval are based on incomplete data. Read-only. */
    private _incompleteData?: IncompleteData | undefined;
    /** Indicates whether the item is 'trending.' Read-only. */
    private _isTrending?: boolean | undefined;
    /** Statistics about the move actions in this interval. Read-only. */
    private _move?: ItemActionStat | undefined;
    /** When the interval starts. Read-only. */
    private _startDateTime?: Date | undefined;
    /**
     * Gets the access property value. Statistics about the access actions in this interval. Read-only.
     * @returns a ItemActionStatInterface
     */
    public get access() {
        return this._access;
    };
    /**
     * Sets the access property value. Statistics about the access actions in this interval. Read-only.
     * @param value Value to set for the access property.
     */
    public set access(value: ItemActionStat | undefined) {
        if(value) {
            this._access = value instanceof ItemActionStatImpl? value : new ItemActionStatImpl(value);
        }
    };
    /**
     * Gets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
     * @returns a ItemActivityInterface
     */
    public get activities() {
        return this._activities;
    };
    /**
     * Sets the activities property value. Exposes the itemActivities represented in this itemActivityStat resource.
     * @param value Value to set for the activities property.
     */
    public set activities(value: ItemActivity[] | undefined) {
        if(value) {
            const activitiesArrValue: ItemActivityImpl[] = [];
            this.activities?.forEach(element => {
                activitiesArrValue.push((element instanceof ItemActivityImpl? element:new ItemActivityImpl(element)));
            });
            this._activities = activitiesArrValue;
        }
    };
    /**
     * Instantiates a new itemActivityStat and sets the default values.
     * @param itemActivityStatParameterValue 
     */
    public constructor(itemActivityStatParameterValue?: ItemActivityStat | undefined) {
        super(itemActivityStatParameterValue);
        this._access = itemActivityStatParameterValue?.access;
        this._activities = itemActivityStatParameterValue?.activities;
        this._create = itemActivityStatParameterValue?.create;
        this._delete = itemActivityStatParameterValue?.delete;
        this._edit = itemActivityStatParameterValue?.edit;
        this._endDateTime = itemActivityStatParameterValue?.endDateTime;
        this._incompleteData = itemActivityStatParameterValue?.incompleteData;
        this._isTrending = itemActivityStatParameterValue?.isTrending;
        this._move = itemActivityStatParameterValue?.move;
        this._startDateTime = itemActivityStatParameterValue?.startDateTime;
    };
    /**
     * Gets the create property value. Statistics about the create actions in this interval. Read-only.
     * @returns a ItemActionStatInterface
     */
    public get create() {
        return this._create;
    };
    /**
     * Sets the create property value. Statistics about the create actions in this interval. Read-only.
     * @param value Value to set for the create property.
     */
    public set create(value: ItemActionStat | undefined) {
        if(value) {
            this._create = value instanceof ItemActionStatImpl? value : new ItemActionStatImpl(value);
        }
    };
    /**
     * Gets the delete property value. Statistics about the delete actions in this interval. Read-only.
     * @returns a ItemActionStatInterface
     */
    public get delete() {
        return this._delete;
    };
    /**
     * Sets the delete property value. Statistics about the delete actions in this interval. Read-only.
     * @param value Value to set for the delete property.
     */
    public set delete(value: ItemActionStat | undefined) {
        if(value) {
            this._delete = value instanceof ItemActionStatImpl? value : new ItemActionStatImpl(value);
        }
    };
    /**
     * Gets the edit property value. Statistics about the edit actions in this interval. Read-only.
     * @returns a ItemActionStatInterface
     */
    public get edit() {
        return this._edit;
    };
    /**
     * Sets the edit property value. Statistics about the edit actions in this interval. Read-only.
     * @param value Value to set for the edit property.
     */
    public set edit(value: ItemActionStat | undefined) {
        if(value) {
            this._edit = value instanceof ItemActionStatImpl? value : new ItemActionStatImpl(value);
        }
    };
    /**
     * Gets the endDateTime property value. When the interval ends. Read-only.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. When the interval ends. Read-only.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "access": n => { this.access = n.getObjectValue<ItemActionStatImpl>(createItemActionStatFromDiscriminatorValue); },
            "activities": n => { this.activities = n.getCollectionOfObjectValues<ItemActivityImpl>(createItemActivityFromDiscriminatorValue); },
            "create": n => { this.create = n.getObjectValue<ItemActionStatImpl>(createItemActionStatFromDiscriminatorValue); },
            "delete": n => { this.delete = n.getObjectValue<ItemActionStatImpl>(createItemActionStatFromDiscriminatorValue); },
            "edit": n => { this.edit = n.getObjectValue<ItemActionStatImpl>(createItemActionStatFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "incompleteData": n => { this.incompleteData = n.getObjectValue<IncompleteDataImpl>(createIncompleteDataFromDiscriminatorValue); },
            "isTrending": n => { this.isTrending = n.getBooleanValue(); },
            "move": n => { this.move = n.getObjectValue<ItemActionStatImpl>(createItemActionStatFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
     * @returns a IncompleteDataInterface
     */
    public get incompleteData() {
        return this._incompleteData;
    };
    /**
     * Sets the incompleteData property value. Indicates that the statistics in this interval are based on incomplete data. Read-only.
     * @param value Value to set for the incompleteData property.
     */
    public set incompleteData(value: IncompleteData | undefined) {
        if(value) {
            this._incompleteData = value instanceof IncompleteDataImpl? value : new IncompleteDataImpl(value);
        }
    };
    /**
     * Gets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
     * @returns a boolean
     */
    public get isTrending() {
        return this._isTrending;
    };
    /**
     * Sets the isTrending property value. Indicates whether the item is 'trending.' Read-only.
     * @param value Value to set for the isTrending property.
     */
    public set isTrending(value: boolean | undefined) {
        if(value) {
            this._isTrending = value;
        }
    };
    /**
     * Gets the move property value. Statistics about the move actions in this interval. Read-only.
     * @returns a ItemActionStatInterface
     */
    public get move() {
        return this._move;
    };
    /**
     * Sets the move property value. Statistics about the move actions in this interval. Read-only.
     * @param value Value to set for the move property.
     */
    public set move(value: ItemActionStat | undefined) {
        if(value) {
            this._move = value instanceof ItemActionStatImpl? value : new ItemActionStatImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.access){
            writer.writeObjectValue<ItemActionStatImpl>("access", (!this.access || this.access instanceof ItemActionStatImpl? this.access : new ItemActionStatImpl(this.access)));
        }
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: ItemActivityImpl[] = [];
        this.activities?.forEach(element => {
            activitiesArrValue.push((element instanceof ItemActivityImpl? element:new ItemActivityImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ItemActivityImpl>("activities", activitiesArrValue);
        }
        if(this.create){
            writer.writeObjectValue<ItemActionStatImpl>("create", (!this.create || this.create instanceof ItemActionStatImpl? this.create : new ItemActionStatImpl(this.create)));
        }
        if(this.delete){
            writer.writeObjectValue<ItemActionStatImpl>("delete", (!this.delete || this.delete instanceof ItemActionStatImpl? this.delete : new ItemActionStatImpl(this.delete)));
        }
        if(this.edit){
            writer.writeObjectValue<ItemActionStatImpl>("edit", (!this.edit || this.edit instanceof ItemActionStatImpl? this.edit : new ItemActionStatImpl(this.edit)));
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.incompleteData){
            writer.writeObjectValue<IncompleteDataImpl>("incompleteData", (!this.incompleteData || this.incompleteData instanceof IncompleteDataImpl? this.incompleteData : new IncompleteDataImpl(this.incompleteData)));
        }
        if(this.isTrending){
            writer.writeBooleanValue("isTrending", this.isTrending);
        }
        if(this.move){
            writer.writeObjectValue<ItemActionStatImpl>("move", (!this.move || this.move instanceof ItemActionStatImpl? this.move : new ItemActionStatImpl(this.move)));
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
    /**
     * Gets the startDateTime property value. When the interval starts. Read-only.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. When the interval starts. Read-only.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
}
