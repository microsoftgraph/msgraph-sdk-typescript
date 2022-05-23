import {Entity} from './entity';
import {MobileAppContentFileUploadState} from './mobileAppContentFileUploadState';

export interface MobileAppContentFile extends Entity{
    /** The Azure Storage URI. */
    azureStorageUri?:string | undefined;
    /** The time the Azure storage Uri expires. */
    azureStorageUriExpirationDateTime?:Date | undefined;
    /** The time the file was created. */
    createdDateTime?:Date | undefined;
    /** A value indicating whether the file is committed. */
    isCommitted?:boolean | undefined;
    /** The manifest information. */
    manifest?:string | undefined;
    /** the file name. */
    name?:string | undefined;
    /** The size of the file prior to encryption. */
    size?:number | undefined;
    /** The size of the file after encryption. */
    sizeEncrypted?:number | undefined;
    /** The state of the current upload request. Possible values are: success, transientError, error, unknown, azureStorageUriRequestSuccess, azureStorageUriRequestPending, azureStorageUriRequestFailed, azureStorageUriRequestTimedOut, azureStorageUriRenewalSuccess, azureStorageUriRenewalPending, azureStorageUriRenewalFailed, azureStorageUriRenewalTimedOut, commitFileSuccess, commitFilePending, commitFileFailed, commitFileTimedOut. */
    uploadState?:MobileAppContentFileUploadState | undefined;
}
