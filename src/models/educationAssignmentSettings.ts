import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationAssignmentSettings extends Entity, Parsable {
    /**
     * Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false.
     */
    submissionAnimationDisabled?: boolean | undefined;
}
