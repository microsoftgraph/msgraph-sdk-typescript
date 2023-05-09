import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {OfficeGraphInsights} from './officeGraphInsights';
import {serializeSharedInsight} from './serializeSharedInsight';
import {serializeTrending} from './serializeTrending';
import {serializeUsedInsight} from './serializeUsedInsight';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfficeGraphInsights(officeGraphInsights: OfficeGraphInsights | undefined = {} as OfficeGraphInsights) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(officeGraphInsights),
        "shared": n => { officeGraphInsights.shared = n.getCollectionOfObjectValues<SharedInsight>(createSharedInsightFromDiscriminatorValue); },
        "trending": n => { officeGraphInsights.trending = n.getCollectionOfObjectValues<Trending>(createTrendingFromDiscriminatorValue); },
        "used": n => { officeGraphInsights.used = n.getCollectionOfObjectValues<UsedInsight>(createUsedInsightFromDiscriminatorValue); },
    }
}
