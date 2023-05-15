import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsErrorPostRequestBody} from './isErrorPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsErrorPostRequestBody(isErrorPostRequestBody: IsErrorPostRequestBody | undefined = {} as IsErrorPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isErrorPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
