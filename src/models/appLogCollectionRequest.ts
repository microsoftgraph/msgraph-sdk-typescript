import {AppLogUploadState} from './appLogUploadState';
import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequest extends Entity, Parsable {
    /**
     * Time at which the upload log request reached a completed state if not completed yet NULL will be returned.
     */
    completedDateTime?: Date | undefined;
    /**
     * List of log folders.
     */
    customLogFolders?: string[] | undefined;
    /**
     * Indicates error message if any during the upload process.
     */
    errorMessage?: string | undefined;
    /**
     * AppLogUploadStatus
     */
    status?: AppLogUploadState | undefined;
}
