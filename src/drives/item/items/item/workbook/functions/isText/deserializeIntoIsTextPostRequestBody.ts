import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsTextPostRequestBody} from './isTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsTextPostRequestBody(isTextPostRequestBody: IsTextPostRequestBody | undefined = {} as IsTextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isTextPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
