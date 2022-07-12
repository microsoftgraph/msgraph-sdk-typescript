import {createItemActivityStatFromDiscriminatorValue} from './createItemActivityStatFromDiscriminatorValue';
import {Entity, ItemActivityStat} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemAnalytics extends Entity implements Parsable {
    /** The allTime property */
    private _allTime?: ItemActivityStat | undefined;
    /** The itemActivityStats property */
    private _itemActivityStats?: ItemActivityStat[] | undefined;
    /** The lastSevenDays property */
    private _lastSevenDays?: ItemActivityStat | undefined;
    /**
     * Gets the allTime property value. The allTime property
     * @returns a itemActivityStat
     */
    public get allTime() {
        return this._allTime;
    };
    /**
     * Sets the allTime property value. The allTime property
     * @param value Value to set for the allTime property.
     */
    public set allTime(value: ItemActivityStat | undefined) {
        this._allTime = value;
    };
    /**
     * Instantiates a new itemAnalytics and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allTime": n => { this.allTime = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
            "itemActivityStats": n => { this.itemActivityStats = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
            "lastSevenDays": n => { this.lastSevenDays = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the itemActivityStats property value. The itemActivityStats property
     * @returns a itemActivityStat
     */
    public get itemActivityStats() {
        return this._itemActivityStats;
    };
    /**
     * Sets the itemActivityStats property value. The itemActivityStats property
     * @param value Value to set for the itemActivityStats property.
     */
    public set itemActivityStats(value: ItemActivityStat[] | undefined) {
        this._itemActivityStats = value;
    };
    /**
     * Gets the lastSevenDays property value. The lastSevenDays property
     * @returns a itemActivityStat
     */
    public get lastSevenDays() {
        return this._lastSevenDays;
    };
    /**
     * Sets the lastSevenDays property value. The lastSevenDays property
     * @param value Value to set for the lastSevenDays property.
     */
    public set lastSevenDays(value: ItemActivityStat | undefined) {
        this._lastSevenDays = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ItemActivityStat>("allTime", this.allTime);
        writer.writeCollectionOfObjectValues<ItemActivityStat>("itemActivityStats", this.itemActivityStats);
        writer.writeObjectValue<ItemActivityStat>("lastSevenDays", this.lastSevenDays);
    };
}
