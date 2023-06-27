import {AccessReviewQueryScope} from './accessReviewQueryScope';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInactiveUsersQueryScope extends AccessReviewQueryScope, Parsable {
    /**
     * Defines the duration of inactivity. Inactivity is based on the last sign in date of the user compared to the access review instance's start date. If this property is not specified, it's assigned the default value PT0S.
     */
    inactiveDuration?: Duration | undefined;
}
