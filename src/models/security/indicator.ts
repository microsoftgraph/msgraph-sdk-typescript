import type {Entity} from '../entity';
import type {Artifact} from './artifact';
import {IndicatorSource} from './indicatorSource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Indicator extends Entity, Parsable {
    /**
     * The artifact property
     */
    artifact?: Artifact | undefined;
    /**
     * The source property
     */
    source?: IndicatorSource | undefined;
}
