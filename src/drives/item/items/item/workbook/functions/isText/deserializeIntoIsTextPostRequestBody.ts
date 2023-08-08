import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsTextPostRequestBody} from './isTextPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsTextPostRequestBody(isTextPostRequestBody: IsTextPostRequestBody | undefined = {} as IsTextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isTextPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
