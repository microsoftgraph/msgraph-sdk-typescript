import type {EducationResource} from './educationResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationLinkResource extends EducationResource, Parsable {
    /**
     * URL to the resource.
     */
    link?: string | undefined;
}
