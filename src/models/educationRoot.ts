import {EducationClass} from './educationClass';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRoot extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The classes property */
    classes?: EducationClass[] | undefined;
    /** The me property */
    me?: EducationUser | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The schools property */
    schools?: EducationSchool[] | undefined;
    /** The users property */
    users?: EducationUser[] | undefined;
}
