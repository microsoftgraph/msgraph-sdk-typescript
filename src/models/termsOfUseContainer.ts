import {Agreement} from './agreement';
import {AgreementAcceptance} from './agreementAcceptance';
import {Entity} from './entity';

export interface TermsOfUseContainer extends Entity{
    /** Represents the current status of a user's response to a company's customizable terms of use agreement. */
    agreementAcceptances?:AgreementAcceptance[] | undefined;
    /** Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD). */
    agreements?:Agreement[] | undefined;
}
