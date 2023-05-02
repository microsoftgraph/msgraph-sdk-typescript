import {SearchContent} from './searchContent';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharePointOneDriveOptions extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The type of search content. The possible values are: sharedContent, privateContent, unknownFutureValue. Read-only. */
    includeContent?: SearchContent | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
