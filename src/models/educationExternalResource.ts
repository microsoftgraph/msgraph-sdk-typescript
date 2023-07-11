import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationExternalResource extends EducationResource, Parsable {
    /**
     * Location of the resource. Required
     */
    webUrl?: string | undefined;
}
