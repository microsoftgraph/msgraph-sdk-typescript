import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {Entity, SharedInsight, Trending, UsedInsight} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OfficeGraphInsights extends Entity implements Parsable {
    /** Access this property from the derived type itemInsights. */
    private _shared?: SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights. */
    private _trending?: Trending[] | undefined;
    /** Access this property from the derived type itemInsights. */
    private _used?: UsedInsight[] | undefined;
    /**
     * Instantiates a new officeGraphInsights and sets the default values.
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
            "shared": n => { this.shared = n.getCollectionOfObjectValues<SharedInsight>(createSharedInsightFromDiscriminatorValue); },
            "trending": n => { this.trending = n.getCollectionOfObjectValues<Trending>(createTrendingFromDiscriminatorValue); },
            "used": n => { this.used = n.getCollectionOfObjectValues<UsedInsight>(createUsedInsightFromDiscriminatorValue); },
        };
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
     * Gets the shared property value. Access this property from the derived type itemInsights.
     * @returns a sharedInsight
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Sets the shared property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the shared property.
     */
    public set shared(value: SharedInsight[] | undefined) {
        this._shared = value;
    };
    /**
     * Gets the trending property value. Access this property from the derived type itemInsights.
     * @returns a trending
     */
    public get trending() {
        return this._trending;
    };
    /**
     * Sets the trending property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the trending property.
     */
    public set trending(value: Trending[] | undefined) {
        this._trending = value;
    };
    /**
     * Gets the used property value. Access this property from the derived type itemInsights.
     * @returns a usedInsight
     */
    public get used() {
        return this._used;
    };
    /**
     * Sets the used property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the used property.
     */
    public set used(value: UsedInsight[] | undefined) {
        this._used = value;
    };
}
