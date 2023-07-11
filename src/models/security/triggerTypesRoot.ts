import {Entity} from '../entity';
import {RetentionEventType} from './retentionEventType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TriggerTypesRoot extends Entity, Parsable {
    /**
     * The retentionEventTypes property
     */
    retentionEventTypes?: RetentionEventType[] | undefined;
}
