import {AgreementFileProperties} from './agreementFileProperties';
import {AgreementFileVersion} from './agreementFileVersion';

export interface AgreementFileLocalization extends AgreementFileProperties{
    /** Read-only. Customized versions of the terms of use agreement in the Azure AD tenant. */
    versions?:AgreementFileVersion[] | undefined;
}
