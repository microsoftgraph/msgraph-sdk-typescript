import type {EducationResource} from './educationResource';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationMediaResource extends EducationResource, Parsable {
    /**
     * Location of the file on shared point folder. Required
     */
    fileUrl?: string | undefined;
}
