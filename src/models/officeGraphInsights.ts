import {Entity} from './entity';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OfficeGraphInsights extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Access this property from the derived type itemInsights. */
    shared?: SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights. */
    trending?: Trending[] | undefined;
    /** Access this property from the derived type itemInsights. */
    used?: UsedInsight[] | undefined;
}
