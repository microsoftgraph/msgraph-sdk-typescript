import {EducationExternalSource} from './educationExternalSource';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOrganization extends Entity, Parsable {
    /**
     * Organization description.
     */
    description?: string | undefined;
    /**
     * Organization display name.
     */
    displayName?: string | undefined;
    /**
     * Source where this organization was created from. Possible values are: sis, manual.
     */
    externalSource?: EducationExternalSource | undefined;
    /**
     * The name of the external source this resources was generated from.
     */
    externalSourceDetail?: string | undefined;
}
