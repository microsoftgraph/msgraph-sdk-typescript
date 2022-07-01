import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {EntityImpl, SharedInsightImpl, TrendingImpl, UsedInsightImpl} from './index';
import {OfficeGraphInsights} from './officeGraphInsights';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class OfficeGraphInsightsImpl extends EntityImpl implements OfficeGraphInsights {
    /** Access this property from the derived type itemInsights. */
    private _shared?: SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights. */
    private _trending?: Trending[] | undefined;
    /** Access this property from the derived type itemInsights. */
    private _used?: UsedInsight[] | undefined;
    /**
     * Instantiates a new officeGraphInsights and sets the default values.
     * @param officeGraphInsightsParameterValue 
     */
    public constructor(officeGraphInsightsParameterValue?: OfficeGraphInsights | undefined) {
        super(officeGraphInsightsParameterValue);
        this._shared = officeGraphInsightsParameterValue?.shared;
        this._trending = officeGraphInsightsParameterValue?.trending;
        this._used = officeGraphInsightsParameterValue?.used;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "shared": n => { this.shared = n.getCollectionOfObjectValues<SharedInsightImpl>(createSharedInsightFromDiscriminatorValue); },
            "trending": n => { this.trending = n.getCollectionOfObjectValues<TrendingImpl>(createTrendingFromDiscriminatorValue); },
            "used": n => { this.used = n.getCollectionOfObjectValues<UsedInsightImpl>(createUsedInsightFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.shared && this.shared.length != 0){        const sharedArrValue: SharedInsightImpl[] = [];
        this.shared?.forEach(element => {
            sharedArrValue.push((element instanceof SharedInsightImpl? element as SharedInsightImpl:new SharedInsightImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SharedInsightImpl>("shared", sharedArrValue);
        }
        if(this.trending && this.trending.length != 0){        const trendingArrValue: TrendingImpl[] = [];
        this.trending?.forEach(element => {
            trendingArrValue.push((element instanceof TrendingImpl? element as TrendingImpl:new TrendingImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TrendingImpl>("trending", trendingArrValue);
        }
        if(this.used && this.used.length != 0){        const usedArrValue: UsedInsightImpl[] = [];
        this.used?.forEach(element => {
            usedArrValue.push((element instanceof UsedInsightImpl? element as UsedInsightImpl:new UsedInsightImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UsedInsightImpl>("used", usedArrValue);
        }
    };
    /**
     * Gets the shared property value. Access this property from the derived type itemInsights.
     * @returns a SharedInsightInterface
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Sets the shared property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the shared property.
     */
    public set shared(value: SharedInsight[] | undefined) {
        if(value) {
            const sharedArrValue: SharedInsightImpl[] = [];
            this.shared?.forEach(element => {
                sharedArrValue.push((element instanceof SharedInsightImpl? element as SharedInsightImpl:new SharedInsightImpl(element)));
            });
            this._shared = sharedArrValue;
        }
    };
    /**
     * Gets the trending property value. Access this property from the derived type itemInsights.
     * @returns a TrendingInterface
     */
    public get trending() {
        return this._trending;
    };
    /**
     * Sets the trending property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the trending property.
     */
    public set trending(value: Trending[] | undefined) {
        if(value) {
            const trendingArrValue: TrendingImpl[] = [];
            this.trending?.forEach(element => {
                trendingArrValue.push((element instanceof TrendingImpl? element as TrendingImpl:new TrendingImpl(element)));
            });
            this._trending = trendingArrValue;
        }
    };
    /**
     * Gets the used property value. Access this property from the derived type itemInsights.
     * @returns a UsedInsightInterface
     */
    public get used() {
        return this._used;
    };
    /**
     * Sets the used property value. Access this property from the derived type itemInsights.
     * @param value Value to set for the used property.
     */
    public set used(value: UsedInsight[] | undefined) {
        if(value) {
            const usedArrValue: UsedInsightImpl[] = [];
            this.used?.forEach(element => {
                usedArrValue.push((element instanceof UsedInsightImpl? element as UsedInsightImpl:new UsedInsightImpl(element)));
            });
            this._used = usedArrValue;
        }
    };
}
