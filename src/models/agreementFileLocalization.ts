import {AgreementFileProperties} from './agreementFileProperties';
import {AgreementFileVersion} from './agreementFileVersion';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileLocalization extends Partial<AdditionalDataHolder>, AgreementFileProperties, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Read-only. Customized versions of the terms of use agreement in the Azure AD tenant. */
    versions?: AgreementFileVersion[] | undefined;
}
