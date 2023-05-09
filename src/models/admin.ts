import {Edge} from './edge';
import {ServiceAnnouncement} from './serviceAnnouncement';
import {Sharepoint} from './sharepoint';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Admin extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A container for Microsoft Edge resources. Read-only. */
    edge?: Edge | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** A container for service communications resources. Read-only. */
    serviceAnnouncement?: ServiceAnnouncement | undefined;
    /** The sharepoint property */
    sharepoint?: Sharepoint | undefined;
}
