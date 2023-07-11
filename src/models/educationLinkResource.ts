import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationLinkResource extends EducationResource, Parsable {
    /**
     * URL to the resource.
     */
    link?: string | undefined;
}
