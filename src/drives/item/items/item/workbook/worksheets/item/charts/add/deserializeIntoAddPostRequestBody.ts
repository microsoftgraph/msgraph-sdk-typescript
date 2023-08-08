import {createJsonFromDiscriminatorValue} from '../../../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../models/serializeJson';
import type {AddPostRequestBody} from './addPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "seriesBy": n => { addPostRequestBody.seriesBy = n.getStringValue(); },
        "sourceData": n => { addPostRequestBody.sourceData = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { addPostRequestBody.type = n.getStringValue(); },
    }
}
