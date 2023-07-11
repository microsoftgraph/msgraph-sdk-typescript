import {Entity} from './entity';
import {SynchronizationJob} from './synchronizationJob';
import {SynchronizationSecretKeyStringValuePair} from './synchronizationSecretKeyStringValuePair';
import {SynchronizationTemplate} from './synchronizationTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Synchronization extends Entity, Parsable {
    /**
     * Performs synchronization by periodically running in the background, polling for changes in one directory, and pushing them to another directory.
     */
    jobs?: SynchronizationJob[] | undefined;
    /**
     * Represents a collection of credentials to access provisioned cloud applications.
     */
    secrets?: SynchronizationSecretKeyStringValuePair[] | undefined;
    /**
     * Pre-configured synchronization settings for a particular application.
     */
    templates?: SynchronizationTemplate[] | undefined;
}
