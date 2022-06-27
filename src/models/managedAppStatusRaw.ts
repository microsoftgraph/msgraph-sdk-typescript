import {Json} from './json';
import {ManagedAppStatus} from './managedAppStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppStatusRaw extends Partial<AdditionalDataHolder>, ManagedAppStatus, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Status report content. */
    content?: Json | undefined;
}
