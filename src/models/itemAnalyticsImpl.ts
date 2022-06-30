import {createItemActivityStatFromDiscriminatorValue} from './createItemActivityStatFromDiscriminatorValue';
import {EntityImpl, ItemActivityStatImpl} from './index';
import {ItemActivityStat} from './itemActivityStat';
import {ItemAnalytics} from './itemAnalytics';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class ItemAnalyticsImpl extends EntityImpl implements ItemAnalytics {
    /** The allTime property */
    private _allTime?: ItemActivityStat | undefined;
    /** The itemActivityStats property */
    private _itemActivityStats?: ItemActivityStat[] | undefined;
    /** The lastSevenDays property */
    private _lastSevenDays?: ItemActivityStat | undefined;
    /**
     * Gets the allTime property value. The allTime property
     * @returns a ItemActivityStatInterface
     */
    public get allTime() {
        return this._allTime;
    };
    /**
     * Sets the allTime property value. The allTime property
     * @param value Value to set for the allTime property.
     */
    public set allTime(value: ItemActivityStat | undefined) {
        if(value) {
            this._allTime = value instanceof ItemActivityStatImpl? value : new ItemActivityStatImpl(value);
        }
    };
    /**
     * Instantiates a new itemAnalytics and sets the default values.
     * @param itemAnalyticsParameterValue 
     */
    public constructor(itemAnalyticsParameterValue?: ItemAnalytics | undefined) {
        super(itemAnalyticsParameterValue);
        this._allTime = itemAnalyticsParameterValue?.allTime;
        this._itemActivityStats = itemAnalyticsParameterValue?.itemActivityStats;
        this._lastSevenDays = itemAnalyticsParameterValue?.lastSevenDays;
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
     * Gets the itemActivityStats property value. The itemActivityStats property
     * @returns a ItemActivityStatInterface
     */
    public get itemActivityStats() {
        return this._itemActivityStats;
    };
    /**
     * Sets the itemActivityStats property value. The itemActivityStats property
     * @param value Value to set for the itemActivityStats property.
     */
    public set itemActivityStats(value: ItemActivityStat[] | undefined) {
        if(value) {
            const itemActivityStatsArrValue: ItemActivityStatImpl[] = [];
            this.itemActivityStats?.forEach(element => {
                itemActivityStatsArrValue.push((element instanceof ItemActivityStatImpl? element:new ItemActivityStatImpl(element)));
            });
            this._itemActivityStats = itemActivityStatsArrValue;
        }
    };
    /**
     * Gets the lastSevenDays property value. The lastSevenDays property
     * @returns a ItemActivityStatInterface
     */
    public get lastSevenDays() {
        return this._lastSevenDays;
    };
    /**
     * Sets the lastSevenDays property value. The lastSevenDays property
     * @param value Value to set for the lastSevenDays property.
     */
    public set lastSevenDays(value: ItemActivityStat | undefined) {
        if(value) {
            this._lastSevenDays = value instanceof ItemActivityStatImpl? value : new ItemActivityStatImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allTime){
            writer.writeObjectValue<ItemActivityStatImpl>("allTime", (!this.allTime || this.allTime instanceof ItemActivityStatImpl? this.allTime : new ItemActivityStatImpl(this.allTime)));
        }
        if(this.itemActivityStats && this.itemActivityStats.length != 0){        const itemActivityStatsArrValue: ItemActivityStatImpl[] = [];
        this.itemActivityStats?.forEach(element => {
            itemActivityStatsArrValue.push((element instanceof ItemActivityStatImpl? element:new ItemActivityStatImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ItemActivityStatImpl>("itemActivityStats", itemActivityStatsArrValue);
        }
        if(this.lastSevenDays){
            writer.writeObjectValue<ItemActivityStatImpl>("lastSevenDays", (!this.lastSevenDays || this.lastSevenDays instanceof ItemActivityStatImpl? this.lastSevenDays : new ItemActivityStatImpl(this.lastSevenDays)));
        }
    };
}
