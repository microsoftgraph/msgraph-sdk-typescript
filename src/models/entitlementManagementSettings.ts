import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {Entity} from './entity';
import {Duration} from '@microsoft/kiota-abstractions';

export interface EntitlementManagementSettings extends Entity{
    /** If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted. */
    durationUntilExternalUserDeletedAfterBlocked?:Duration | undefined;
    /** One of None, BlockSignIn, or BlockSignInAndDelete. */
    externalUserLifecycleAction?:AccessPackageExternalUserLifecycleAction | undefined;
}
