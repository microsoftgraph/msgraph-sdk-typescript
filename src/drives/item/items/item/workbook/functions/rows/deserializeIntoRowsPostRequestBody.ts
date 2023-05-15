import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RowsPostRequestBody} from './rowsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRowsPostRequestBody(rowsPostRequestBody: RowsPostRequestBody | undefined = {} as RowsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { rowsPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
