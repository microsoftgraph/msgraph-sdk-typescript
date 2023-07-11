import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationMediaResource extends EducationResource, Parsable {
    /**
     * Location of the file on shared point folder. Required
     */
    fileUrl?: string | undefined;
}
