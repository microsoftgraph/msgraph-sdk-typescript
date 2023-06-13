import {Entity} from './entity';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Synchronization extends Entity, Parsable {
    /** The jobs property */
    jobs?: SynchronizationJob[] | undefined;
    /** The secrets property */
    secrets?: SynchronizationSecretKeyStringValuePair[] | undefined;
    /** The templates property */
    templates?: SynchronizationTemplate[] | undefined;
}
