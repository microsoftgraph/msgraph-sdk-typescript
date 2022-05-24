import {Entity} from './entity';
import {SharedInsight} from './sharedInsight';
import {Trending} from './trending';
import {UsedInsight} from './usedInsight';

export interface OfficeGraphInsights extends Entity{
    /** Access this property from the derived type itemInsights. */
    shared?:SharedInsight[] | undefined;
    /** Access this property from the derived type itemInsights. */
    trending?:Trending[] | undefined;
    /** Access this property from the derived type itemInsights. */
    used?:UsedInsight[] | undefined;
}
