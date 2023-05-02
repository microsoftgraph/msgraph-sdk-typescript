import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsErrPostRequestBody} from './isErrPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsErrPostRequestBody(isErrPostRequestBody: IsErrPostRequestBody | undefined = {} as IsErrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isErrPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
