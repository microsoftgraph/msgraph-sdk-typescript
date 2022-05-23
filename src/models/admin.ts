import {ServiceAnnouncement} from './serviceAnnouncement';

export interface Admin{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** A container for service communications resources. Read-only. */
    serviceAnnouncement?:ServiceAnnouncement | undefined;
}
