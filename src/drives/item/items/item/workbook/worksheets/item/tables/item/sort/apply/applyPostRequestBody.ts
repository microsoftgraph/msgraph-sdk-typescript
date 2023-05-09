import {WorkbookSortField} from '../../../../../../../../../../../models/workbookSortField';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplyPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The fields property */
    fields?: WorkbookSortField[] | undefined;
    /** The matchCase property */
    matchCase?: boolean | undefined;
    /** The method property */
    method?: string | undefined;
}
