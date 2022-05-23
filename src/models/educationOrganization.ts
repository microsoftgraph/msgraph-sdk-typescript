import {EducationExternalSource} from './educationExternalSource';
import {Entity} from './entity';

export interface EducationOrganization extends Entity{
    /** Organization description. */
    description?:string | undefined;
    /** Organization display name. */
    displayName?:string | undefined;
    /** Where this user was created from. Possible values are: sis, lms, or manual. */
    externalSource?:EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    externalSourceDetail?:string | undefined;
}
