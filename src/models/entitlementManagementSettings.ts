import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {Entity} from './entity';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface EntitlementManagementSettings extends Entity, Parsable {
    /**
     * If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted.
     */
    durationUntilExternalUserDeletedAfterBlocked?: Duration | undefined;
    /**
     * Automatic action that the service should take when an external user's last access package assignment is removed. The possible values are: none, blockSignIn, blockSignInAndDelete, unknownFutureValue.
     */
    externalUserLifecycleAction?: AccessPackageExternalUserLifecycleAction | undefined;
}
