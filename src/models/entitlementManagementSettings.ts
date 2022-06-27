import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {Entity} from './entity';
import {AdditionalDataHolder, Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface EntitlementManagementSettings extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted. */
    durationUntilExternalUserDeletedAfterBlocked?: Duration | undefined;
    /** One of None, BlockSignIn, or BlockSignInAndDelete. */
    externalUserLifecycleAction?: AccessPackageExternalUserLifecycleAction | undefined;
}
