import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsNumberPostRequestBody} from './isNumberPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsNumberPostRequestBody(isNumberPostRequestBody: IsNumberPostRequestBody | undefined = {} as IsNumberPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isNumberPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
