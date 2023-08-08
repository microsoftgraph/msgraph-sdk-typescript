import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsErrorPostRequestBody} from './isErrorPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsErrorPostRequestBody(isErrorPostRequestBody: IsErrorPostRequestBody | undefined = {} as IsErrorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isErrorPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
