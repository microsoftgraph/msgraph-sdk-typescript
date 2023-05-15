import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsrefPostRequestBody} from './isrefPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsrefPostRequestBody(isrefPostRequestBody: IsrefPostRequestBody | undefined = {} as IsrefPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isrefPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
