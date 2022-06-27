import {KeyValuePair} from './keyValuePair';
import {ManagedAppPolicy} from './managedAppPolicy';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppConfiguration extends Partial<AdditionalDataHolder>, ManagedAppPolicy, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    customSettings?: KeyValuePair[] | undefined;
}
