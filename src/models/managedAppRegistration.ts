import {Entity} from './entity';
import {ManagedAppFlaggedReason} from './managedAppFlaggedReason';
import {ManagedAppOperation} from './managedAppOperation';
import {ManagedAppPolicy} from './managedAppPolicy';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistration extends Entity, Parsable {
    /**
     * The app package Identifier
     */
    appIdentifier?: MobileAppIdentifier | undefined;
    /**
     * App version
     */
    applicationVersion?: string | undefined;
    /**
     * Zero or more policys already applied on the registered app when it last synchronized with managment service.
     */
    appliedPolicies?: ManagedAppPolicy[] | undefined;
    /**
     * Date and time of creation
     */
    createdDateTime?: Date | undefined;
    /**
     * Host device name
     */
    deviceName?: string | undefined;
    /**
     * App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions.
     */
    deviceTag?: string | undefined;
    /**
     * Host device type
     */
    deviceType?: string | undefined;
    /**
     * Zero or more reasons an app registration is flagged. E.g. app running on rooted device
     */
    flaggedReasons?: ManagedAppFlaggedReason[] | undefined;
    /**
     * Zero or more policies admin intended for the app as of now.
     */
    intendedPolicies?: ManagedAppPolicy[] | undefined;
    /**
     * Date and time of last the app synced with management service.
     */
    lastSyncDateTime?: Date | undefined;
    /**
     * App management SDK version
     */
    managementSdkVersion?: string | undefined;
    /**
     * Zero or more long running operations triggered on the app registration.
     */
    operations?: ManagedAppOperation[] | undefined;
    /**
     * Operating System version
     */
    platformVersion?: string | undefined;
    /**
     * The user Id to who this app registration belongs.
     */
    userId?: string | undefined;
    /**
     * Version of the entity.
     */
    version?: string | undefined;
}
