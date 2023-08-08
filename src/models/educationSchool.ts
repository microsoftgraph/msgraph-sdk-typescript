import type {AdministrativeUnit} from './administrativeUnit';
import type {EducationClass} from './educationClass';
import type {EducationOrganization} from './educationOrganization';
import type {EducationUser} from './educationUser';
import type {IdentitySet} from './identitySet';
import type {PhysicalAddress} from './physicalAddress';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSchool extends EducationOrganization, Parsable {
    /**
     * Address of the school.
     */
    address?: PhysicalAddress | undefined;
    /**
     * The underlying administrativeUnit for this school.
     */
    administrativeUnit?: AdministrativeUnit | undefined;
    /**
     * Classes taught at the school. Nullable.
     */
    classes?: EducationClass[] | undefined;
    /**
     * Entity who created the school.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * ID of school in syncing system.
     */
    externalId?: string | undefined;
    /**
     * ID of principal in syncing system.
     */
    externalPrincipalId?: string | undefined;
    /**
     * The fax property
     */
    fax?: string | undefined;
    /**
     * Highest grade taught.
     */
    highestGrade?: string | undefined;
    /**
     * Lowest grade taught.
     */
    lowestGrade?: string | undefined;
    /**
     * Phone number of school.
     */
    phone?: string | undefined;
    /**
     * Email address of the principal.
     */
    principalEmail?: string | undefined;
    /**
     * Name of the principal.
     */
    principalName?: string | undefined;
    /**
     * School Number.
     */
    schoolNumber?: string | undefined;
    /**
     * Users in the school. Nullable.
     */
    users?: EducationUser[] | undefined;
}
