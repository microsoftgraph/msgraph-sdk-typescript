import { type SubjectSet } from './subjectSet';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SingleServicePrincipal extends Parsable, SubjectSet {
    /**
     * Description of this service principal.
     */
    description?: string | undefined;
    /**
     * ID of the servicePrincipal.
     */
    servicePrincipalId?: string | undefined;
}
