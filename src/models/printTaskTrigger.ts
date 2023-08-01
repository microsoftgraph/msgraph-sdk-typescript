import type {Entity} from './entity';
import {PrintEvent} from './printEvent';
import type {PrintTaskDefinition} from './printTaskDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskTrigger extends Entity, Parsable {
    /**
     * The definition property
     */
    definition?: PrintTaskDefinition | undefined;
    /**
     * The event property
     */
    event?: PrintEvent | undefined;
}
