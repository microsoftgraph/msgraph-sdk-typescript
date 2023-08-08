import type {EducationResource} from './educationResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationExternalResource extends EducationResource, Parsable {
    /**
     * Location of the resource. Required
     */
    webUrl?: string | undefined;
}
