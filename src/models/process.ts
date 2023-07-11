import {FileHash} from './fileHash';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Process extends AdditionalDataHolder, Parsable {
    /**
     * User account identifier (user account context the process ran under) for example, AccountName, SID, and so on.
     */
    accountName?: string | undefined;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The full process invocation commandline including all parameters.
     */
    commandLine?: string | undefined;
    /**
     * Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
    /**
     * Complex type containing file hashes (cryptographic and location-sensitive).
     */
    fileHash?: FileHash | undefined;
    /**
     * The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system.
     */
    integrityLevel?: ProcessIntegrityLevel | undefined;
    /**
     * True if the process is elevated.
     */
    isElevated?: boolean | undefined;
    /**
     * The name of the process' Image file.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    parentProcessCreatedDateTime?: Date | undefined;
    /**
     * The Process ID (PID) of the parent process.
     */
    parentProcessId?: number | undefined;
    /**
     * The name of the image file of the parent process.
     */
    parentProcessName?: string | undefined;
    /**
     * Full path, including filename.
     */
    path?: string | undefined;
    /**
     * The Process ID (PID) of the process.
     */
    processId?: number | undefined;
}
