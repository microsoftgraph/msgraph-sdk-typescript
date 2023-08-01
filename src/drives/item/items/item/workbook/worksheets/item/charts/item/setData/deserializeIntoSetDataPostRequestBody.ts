import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../models/serializeJson';
import type {SetDataPostRequestBody} from './setDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetDataPostRequestBody(setDataPostRequestBody: SetDataPostRequestBody | undefined = {} as SetDataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "seriesBy": n => { setDataPostRequestBody.seriesBy = n.getStringValue(); },
        "sourceData": n => { setDataPostRequestBody.sourceData = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
