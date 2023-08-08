import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {createTrendingFromDiscriminatorValue} from './createTrendingFromDiscriminatorValue';
import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {OfficeGraphInsights} from './officeGraphInsights';
import {serializeSharedInsight} from './serializeSharedInsight';
import {serializeTrending} from './serializeTrending';
import {serializeUsedInsight} from './serializeUsedInsight';
import type {SharedInsight} from './sharedInsight';
import type {Trending} from './trending';
import type {UsedInsight} from './usedInsight';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOfficeGraphInsights(officeGraphInsights: OfficeGraphInsights | undefined = {} as OfficeGraphInsights) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(officeGraphInsights),
        "shared": n => { officeGraphInsights.shared = n.getCollectionOfObjectValues<SharedInsight>(createSharedInsightFromDiscriminatorValue); },
        "trending": n => { officeGraphInsights.trending = n.getCollectionOfObjectValues<Trending>(createTrendingFromDiscriminatorValue); },
        "used": n => { officeGraphInsights.used = n.getCollectionOfObjectValues<UsedInsight>(createUsedInsightFromDiscriminatorValue); },
    }
}
