import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsNonTextPostRequestBody} from './isNonTextPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsNonTextPostRequestBody(isNonTextPostRequestBody: IsNonTextPostRequestBody | undefined = {} as IsNonTextPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isNonTextPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
