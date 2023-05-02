import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ColumnsPostRequestBody} from './columnsPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnsPostRequestBody(columnsPostRequestBody: ColumnsPostRequestBody | undefined = {} as ColumnsPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { columnsPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
