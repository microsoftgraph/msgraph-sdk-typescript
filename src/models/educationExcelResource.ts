import {EducationResource} from './educationResource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationExcelResource extends EducationResource, Parsable {
    /**
     * Pointer to the Excel file object.
     */
    fileUrl?: string | undefined;
}
