import {SynchronizationLinkedObjects} from './synchronizationLinkedObjects';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJobSubject extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The links property */
    links?: SynchronizationLinkedObjects | undefined;
    /** The objectId property */
    objectId?: string | undefined;
    /** The objectTypeName property */
    objectTypeName?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
