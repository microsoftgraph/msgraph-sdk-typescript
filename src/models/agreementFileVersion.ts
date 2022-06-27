import {AgreementFileProperties} from './agreementFileProperties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileVersion extends Partial<AdditionalDataHolder>, AgreementFileProperties, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
