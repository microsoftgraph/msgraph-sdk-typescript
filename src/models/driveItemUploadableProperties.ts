import {FileSystemInfo} from './fileSystemInfo';

export interface DriveItemUploadableProperties{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Provides a user-visible description of the item. Read-write. Only on OneDrive Personal. */
    description?:string | undefined;
    /** Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal. */
    fileSize?:number | undefined;
    /** File system information on client. Read-write. */
    fileSystemInfo?:FileSystemInfo | undefined;
    /** The name of the item (filename and extension). Read-write. */
    name?:string | undefined;
}
