import {DeviceInstallState} from './deviceInstallState';
import {EBookInstallSummary} from './eBookInstallSummary';
import {Entity} from './entity';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {MimeContent} from './mimeContent';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable} from '@microsoft/kiota-abstractions';

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
