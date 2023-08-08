import type {EducationResource} from './educationResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFileResource extends EducationResource, Parsable {
    /**
     * Location on disk of the file resource.
     */
    fileUrl?: string | undefined;
}
