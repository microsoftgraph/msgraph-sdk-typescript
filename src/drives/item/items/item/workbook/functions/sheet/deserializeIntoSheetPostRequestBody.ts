import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SheetPostRequestBody} from './sheetPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSheetPostRequestBody(sheetPostRequestBody: SheetPostRequestBody | undefined = {} as SheetPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { sheetPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
