import { type DeviceInstallState } from './deviceInstallState';
import { type EBookInstallSummary } from './eBookInstallSummary';
import { type Entity } from './entity';
import { type ManagedEBookAssignment } from './managedEBookAssignment';
import { type MimeContent } from './mimeContent';
import { type UserInstallStateSummary } from './userInstallStateSummary';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ManagedEBook extends Entity, Parsable {
    /**
     * The list of assignments for this eBook.
     */
    assignments?: ManagedEBookAssignment[] | undefined;
    /**
     * The date and time when the eBook file was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description.
     */
    description?: string | undefined;
    /**
     * The list of installation states for this eBook.
     */
    deviceStates?: DeviceInstallState[] | undefined;
    /**
     * Name of the eBook.
     */
    displayName?: string | undefined;
    /**
     * The more information Url.
     */
    informationUrl?: string | undefined;
    /**
     * Mobile App Install Summary.
     */
    installSummary?: EBookInstallSummary | undefined;
    /**
     * Book cover.
     */
    largeCover?: MimeContent | undefined;
    /**
     * The date and time when the eBook was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The privacy statement Url.
     */
    privacyInformationUrl?: string | undefined;
    /**
     * The date and time when the eBook was published.
     */
    publishedDateTime?: Date | undefined;
    /**
     * Publisher.
     */
    publisher?: string | undefined;
    /**
     * The list of installation states for this eBook.
     */
    userStateSummary?: UserInstallStateSummary[] | undefined;
}
