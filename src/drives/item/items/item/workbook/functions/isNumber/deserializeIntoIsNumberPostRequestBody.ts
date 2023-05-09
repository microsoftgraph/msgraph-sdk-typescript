import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsNumberPostRequestBody} from './isNumberPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsNumberPostRequestBody(isNumberPostRequestBody: IsNumberPostRequestBody | undefined = {} as IsNumberPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isNumberPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
