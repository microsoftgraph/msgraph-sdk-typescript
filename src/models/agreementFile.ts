import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileProperties} from './agreementFileProperties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFile extends Partial<AdditionalDataHolder>, AgreementFileProperties, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The localized version of the terms of use agreement files attached to the agreement. */
    localizations?: AgreementFileLocalization[] | undefined;
}
