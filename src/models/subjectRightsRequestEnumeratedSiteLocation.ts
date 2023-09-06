import { type SubjectRightsRequestSiteLocation } from './subjectRightsRequestSiteLocation';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestEnumeratedSiteLocation extends Parsable, SubjectRightsRequestSiteLocation {
    /**
     * The urls property
     */
    urls?: string[] | undefined;
}
