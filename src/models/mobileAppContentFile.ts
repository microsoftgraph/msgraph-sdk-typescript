import {Entity} from './entity';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MobileAppContentFile extends Entity, Parsable {
    /**
     * The Azure Storage URI.
     */
    azureStorageUri?: string | undefined;
    /**
     * The time the Azure storage Uri expires.
     */
    azureStorageUriExpirationDateTime?: Date | undefined;
    /**
     * The time the file was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * A value indicating whether the file is committed.
     */
    isCommitted?: boolean | undefined;
    /**
     * The manifest information.
     */
    manifest?: string | undefined;
    /**
     * the file name.
     */
    name?: string | undefined;
    /**
     * The size of the file prior to encryption.
     */
    size?: number | undefined;
    /**
     * The size of the file after encryption.
     */
    sizeEncrypted?: number | undefined;
    /**
     * Contains properties for upload request states.
     */
    uploadState?: MobileAppContentFileUploadState | undefined;
}
