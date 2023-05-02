import {createJsonFromDiscriminatorValue} from '../../../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../../../models/json';
import {serializeJson} from '../../../../../../../../../models/serializeJson';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { addPostRequestBody.comment = n.getStringValue(); },
        "name": n => { addPostRequestBody.name = n.getStringValue(); },
        "reference": n => { addPostRequestBody.reference = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
