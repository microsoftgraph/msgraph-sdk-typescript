import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileProperties} from './agreementFileProperties';

export interface AgreementFile extends AgreementFileProperties{
    /** The localized version of the terms of use agreement files attached to the agreement. */
    localizations?:AgreementFileLocalization[] | undefined;
}
