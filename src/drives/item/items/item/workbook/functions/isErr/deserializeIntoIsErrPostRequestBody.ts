import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsErrPostRequestBody} from './isErrPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsErrPostRequestBody(isErrPostRequestBody: IsErrPostRequestBody | undefined = {} as IsErrPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isErrPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
