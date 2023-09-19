import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationAssignmentSettings extends Entity, Parsable {
    /**
     * Indicates whether turn-in celebration animation is shown. A value of true indicates that the animation isn't shown. Default value is false.
     */
    submissionAnimationDisabled?: boolean | undefined;
}
