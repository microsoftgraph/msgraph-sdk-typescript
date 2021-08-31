import {Entity} from '../../entity';
import {SharedInsight} from '../../sharedInsight';
import {Trending} from '../../trending';
import {UsedInsight} from '../../usedInsight';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Insights extends Entity implements Parsable {
    /** Access this property from the derived type itemInsights.  */
    private _shared?: SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights.  */
    private _trending?: Trending[] | undefined;
    /** Access this property from the derived type itemInsights.  */
    private _used?: UsedInsight[] | undefined;
    /**
     * Instantiates a new Insights and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the shared property value. Access this property from the derived type itemInsights.
     * @returns a sharedInsight
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Gets the trending property value. Access this property from the derived type itemInsights.
     * @returns a trending
     */
    public get trending() {
        return this._trending;
    };
    /**
     * Gets the used property value. Access this property from the derived type itemInsights.
     * @returns a usedInsight
     */
    public get used() {
        return this._used;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["shared", (o, n) => { (o as unknown as Insights).shared = n.getCollectionOfObjectValues<SharedInsight>(SharedInsight); }],
            ["trending", (o, n) => { (o as unknown as Insights).trending = n.getCollectionOfObjectValues<Trending>(Trending); }],
            ["used", (o, n) => { (o as unknown as Insights).used = n.getCollectionOfObjectValues<UsedInsight>(UsedInsight); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SharedInsight>("shared", this.shared);
        writer.writeCollectionOfObjectValues<Trending>("trending", this.trending);
        writer.writeCollectionOfObjectValues<UsedInsight>("used", this.used);
    };
    /**
     * Sets the shared property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the shared property.
     */
    public set shared(value: SharedInsight[] | undefined) {
        this._shared = value;
    };
    /**
     * Sets the trending property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the trending property.
     */
    public set trending(value: Trending[] | undefined) {
        this._trending = value;
    };
    /**
     * Sets the used property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the used property.
     */
    public set used(value: UsedInsight[] | undefined) {
        this._used = value;
    };
}
