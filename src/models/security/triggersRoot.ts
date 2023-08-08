import type {Entity} from '../entity';
import type {RetentionEvent} from './retentionEvent';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface TriggersRoot extends Entity, Parsable {
    /**
     * The retentionEvents property
     */
    retentionEvents?: RetentionEvent[] | undefined;
}
