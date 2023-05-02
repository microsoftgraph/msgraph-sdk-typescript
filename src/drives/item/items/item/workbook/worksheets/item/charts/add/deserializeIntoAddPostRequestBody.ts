import {createJsonFromDiscriminatorValue} from '../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "seriesBy": n => { addPostRequestBody.seriesBy = n.getStringValue(); },
        "sourceData": n => { addPostRequestBody.sourceData = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { addPostRequestBody.type = n.getStringValue(); },
    }
}
