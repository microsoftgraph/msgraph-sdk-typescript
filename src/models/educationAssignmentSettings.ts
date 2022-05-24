import {Entity} from './entity';

export interface EducationAssignmentSettings extends Entity{
    /** Indicates whether turn-in celebration animation will be shown. A value of true indicates that the animation will not be shown. Default value is false. */
    submissionAnimationDisabled?:boolean | undefined;
}
