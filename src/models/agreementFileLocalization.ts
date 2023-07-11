import {AgreementFileProperties} from './agreementFileProperties';
import {AgreementFileVersion} from './agreementFileVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileLocalization extends AgreementFileProperties, Parsable {
    /**
     * Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.
     */
    versions?: AgreementFileVersion[] | undefined;
}
