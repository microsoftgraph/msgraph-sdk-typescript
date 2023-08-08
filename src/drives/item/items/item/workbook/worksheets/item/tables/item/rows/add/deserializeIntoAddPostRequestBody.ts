import {createJsonFromDiscriminatorValue} from '../../../../../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../../../models/serializeJson';
import type {AddPostRequestBody} from './addPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "index": n => { addPostRequestBody.index = n.getNumberValue(); },
        "values": n => { addPostRequestBody.values = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
