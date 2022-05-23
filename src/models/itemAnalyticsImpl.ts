import {createItemActivityStatFromDiscriminatorValue} from './createItemActivityStatFromDiscriminatorValue';
import {EntityImpl, ItemActivityStatImpl} from './index';
import {ItemActivityStat} from './itemActivityStat';
import {ItemAnalytics} from './itemAnalytics';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ItemAnalyticsImpl extends EntityImpl implements ItemAnalytics, Parsable {
    /** The allTime property */
    public allTime?: ItemActivityStat | undefined;
    /** The itemActivityStats property */
    public itemActivityStats?: ItemActivityStat[] | undefined;
    /** The lastSevenDays property */
    public lastSevenDays?: ItemActivityStat | undefined;
    /**
     * Instantiates a new itemAnalytics and sets the default values.
     * @param itemAnalyticsParameterValue 
     */
    public constructor(itemAnalyticsParameterValue?: ItemAnalytics | undefined) {
        super();
        this.allTime = itemAnalyticsParameterValue?.allTime ;
        this.itemActivityStats = itemAnalyticsParameterValue?.itemActivityStats ;
        this.lastSevenDays = itemAnalyticsParameterValue?.lastSevenDays ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allTime": n => { this.allTime = n.getObjectValue<ItemActivityStatImpl>(createItemActivityStatFromDiscriminatorValue); },
            "itemActivityStats": n => { this.itemActivityStats = n.getCollectionOfObjectValues<ItemActivityStatImpl>(createItemActivityStatFromDiscriminatorValue); },
            "lastSevenDays": n => { this.lastSevenDays = n.getObjectValue<ItemActivityStatImpl>(createItemActivityStatFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allTime){
        writer.writeObjectValue<ItemActivityStatImpl>("allTime", new ItemActivityStatImpl(this.allTime));
        }
        if(this.itemActivityStats && this.itemActivityStats.length != 0){        const itemActivityStatsArrValue: ItemActivityStatImpl[] = []; this.itemActivityStats?.forEach(element => {itemActivityStatsArrValue.push(new ItemActivityStatImpl(element));});
        writer.writeCollectionOfObjectValues<ItemActivityStatImpl>("itemActivityStats", itemActivityStatsArrValue);
        }
        if(this.lastSevenDays){
        writer.writeObjectValue<ItemActivityStatImpl>("lastSevenDays", new ItemActivityStatImpl(this.lastSevenDays));
        }
    };
}
