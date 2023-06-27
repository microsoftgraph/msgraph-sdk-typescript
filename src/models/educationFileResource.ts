import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFileResource extends EducationResource, Parsable {
    /**
     * Location on disk of the file resource.
     */
    fileUrl?: string | undefined;
}
