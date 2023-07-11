import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileProperties} from './agreementFileProperties';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFile extends AgreementFileProperties, Parsable {
    /**
     * The localized version of the terms of use agreement files attached to the agreement.
     */
    localizations?: AgreementFileLocalization[] | undefined;
}
