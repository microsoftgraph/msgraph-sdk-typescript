import {ManagedAppRegistration} from './managedAppRegistration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppRegistration extends Partial<AdditionalDataHolder>, ManagedAppRegistration, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
