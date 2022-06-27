import {Agreement} from './agreement';
import {AgreementAcceptance} from './agreementAcceptance';
import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TermsOfUseContainer extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the current status of a user's response to a company's customizable terms of use agreement. */
    agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD). */
    agreements?: Agreement[] | undefined;
}
