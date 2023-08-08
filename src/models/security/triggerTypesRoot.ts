import type {Entity} from '../entity';
import type {RetentionEventType} from './retentionEventType';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TriggerTypesRoot extends Entity, Parsable {
    /**
     * The retentionEventTypes property
     */
    retentionEventTypes?: RetentionEventType[] | undefined;
}
