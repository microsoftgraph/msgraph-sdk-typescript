import {Entity} from './entity';
import {WorkforceIntegration} from './workforceIntegration';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Teamwork extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A workforce integration with shifts. */
    workforceIntegrations?: WorkforceIntegration[] | undefined;
}
