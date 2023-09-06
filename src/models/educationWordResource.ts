import { type EducationResource } from './educationResource';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationWordResource extends EducationResource, Parsable {
    /**
     * Location of the file on disk.
     */
    fileUrl?: string | undefined;
}
