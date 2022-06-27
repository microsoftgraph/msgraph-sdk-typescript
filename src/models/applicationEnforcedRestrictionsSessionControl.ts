import {ConditionalAccessSessionControl} from './conditionalAccessSessionControl';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationEnforcedRestrictionsSessionControl extends Partial<AdditionalDataHolder>, ConditionalAccessSessionControl, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
