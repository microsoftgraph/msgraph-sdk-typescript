import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {EntityImpl, SharedInsightImpl, TrendingImpl, UsedInsightImpl} from './index';
import {OfficeGraphInsights} from './officeGraphInsights';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class OfficeGraphInsightsImpl extends EntityImpl implements OfficeGraphInsights, Parsable {
    /** Access this property from the derived type itemInsights. */
    public shared?: SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights. */
    public trending?: Trending[] | undefined;
    /** Access this property from the derived type itemInsights. */
    public used?: UsedInsight[] | undefined;
    /**
     * Instantiates a new officeGraphInsights and sets the default values.
     * @param officeGraphInsightsParameterValue 
     */
    public constructor(officeGraphInsightsParameterValue?: OfficeGraphInsights | undefined) {
        super();
        this.shared = officeGraphInsightsParameterValue?.shared ;
        this.trending = officeGraphInsightsParameterValue?.trending ;
        this.used = officeGraphInsightsParameterValue?.used ;
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
        if(this.shared && this.shared.length != 0){        const sharedArrValue: SharedInsightImpl[] = []; this.shared?.forEach(element => {sharedArrValue.push(new SharedInsightImpl(element));});
        writer.writeCollectionOfObjectValues<SharedInsightImpl>("shared", sharedArrValue);
        }
        if(this.trending && this.trending.length != 0){        const trendingArrValue: TrendingImpl[] = []; this.trending?.forEach(element => {trendingArrValue.push(new TrendingImpl(element));});
        writer.writeCollectionOfObjectValues<TrendingImpl>("trending", trendingArrValue);
        }
        if(this.used && this.used.length != 0){        const usedArrValue: UsedInsightImpl[] = []; this.used?.forEach(element => {usedArrValue.push(new UsedInsightImpl(element));});
        writer.writeCollectionOfObjectValues<UsedInsightImpl>("used", usedArrValue);
        }
    };
}
