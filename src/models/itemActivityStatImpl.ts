import {createIncompleteDataFromDiscriminatorValue} from './createIncompleteDataFromDiscriminatorValue';
import {createItemActionStatFromDiscriminatorValue} from './createItemActionStatFromDiscriminatorValue';
import {createItemActivityFromDiscriminatorValue} from './createItemActivityFromDiscriminatorValue';
import {IncompleteData} from './incompleteData';
import {EntityImpl, IncompleteDataImpl, ItemActionStatImpl, ItemActivityImpl} from './index';
import {ItemActionStat} from './itemActionStat';
import {ItemActivity} from './itemActivity';
import {ItemActivityStat} from './itemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ItemActivityStatImpl extends EntityImpl implements ItemActivityStat, Parsable {
    /** Statistics about the access actions in this interval. Read-only. */
    public access?: ItemActionStat | undefined;
    /** Exposes the itemActivities represented in this itemActivityStat resource. */
    public activities?: ItemActivity[] | undefined;
    /** Statistics about the create actions in this interval. Read-only. */
    public create?: ItemActionStat | undefined;
    /** Statistics about the delete actions in this interval. Read-only. */
    public delete?: ItemActionStat | undefined;
    /** Statistics about the edit actions in this interval. Read-only. */
    public edit?: ItemActionStat | undefined;
    /** When the interval ends. Read-only. */
    public endDateTime?: Date | undefined;
    /** Indicates that the statistics in this interval are based on incomplete data. Read-only. */
    public incompleteData?: IncompleteData | undefined;
    /** Indicates whether the item is 'trending.' Read-only. */
    public isTrending?: boolean | undefined;
    /** Statistics about the move actions in this interval. Read-only. */
    public move?: ItemActionStat | undefined;
    /** When the interval starts. Read-only. */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new itemActivityStat and sets the default values.
     * @param itemActivityStatParameterValue 
     */
    public constructor(itemActivityStatParameterValue?: ItemActivityStat | undefined) {
        super();
        this.access = itemActivityStatParameterValue?.access ;
        this.activities = itemActivityStatParameterValue?.activities ;
        this.create = itemActivityStatParameterValue?.create ;
        this.delete = itemActivityStatParameterValue?.delete ;
        this.edit = itemActivityStatParameterValue?.edit ;
        this.endDateTime = itemActivityStatParameterValue?.endDateTime ;
        this.incompleteData = itemActivityStatParameterValue?.incompleteData ;
        this.isTrending = itemActivityStatParameterValue?.isTrending ;
        this.move = itemActivityStatParameterValue?.move ;
        this.startDateTime = itemActivityStatParameterValue?.startDateTime ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.access){
        writer.writeObjectValue<ItemActionStatImpl>("access", new ItemActionStatImpl(this.access));
        }
        if(this.activities && this.activities.length != 0){        const activitiesArrValue: ItemActivityImpl[] = []; this.activities?.forEach(element => {activitiesArrValue.push(new ItemActivityImpl(element));});
        writer.writeCollectionOfObjectValues<ItemActivityImpl>("activities", activitiesArrValue);
        }
        if(this.create){
        writer.writeObjectValue<ItemActionStatImpl>("create", new ItemActionStatImpl(this.create));
        }
        if(this.delete){
        writer.writeObjectValue<ItemActionStatImpl>("delete", new ItemActionStatImpl(this.delete));
        }
        if(this.edit){
        writer.writeObjectValue<ItemActionStatImpl>("edit", new ItemActionStatImpl(this.edit));
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.incompleteData){
        writer.writeObjectValue<IncompleteDataImpl>("incompleteData", new IncompleteDataImpl(this.incompleteData));
        }
        if(this.isTrending){
        writer.writeBooleanValue("isTrending", this.isTrending);
        }
        if(this.move){
        writer.writeObjectValue<ItemActionStatImpl>("move", new ItemActionStatImpl(this.move));
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
    };
}
