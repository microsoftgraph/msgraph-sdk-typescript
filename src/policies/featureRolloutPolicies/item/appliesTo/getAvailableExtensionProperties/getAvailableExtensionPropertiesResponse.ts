import {ExtensionProperty} from '../../../../../models/extensionProperty';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetAvailableExtensionPropertiesResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The value property */
    value?: ExtensionProperty[] | undefined;
}
