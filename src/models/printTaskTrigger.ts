import {Entity} from './entity';
import {PrintEvent} from './printEvent';
import {PrintTaskDefinition} from './printTaskDefinition';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskTrigger extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The definition property */
    definition?: PrintTaskDefinition | undefined;
    /** The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table. */
    event?: PrintEvent | undefined;
}
