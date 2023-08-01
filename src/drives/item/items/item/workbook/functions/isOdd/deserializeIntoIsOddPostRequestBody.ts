import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IsOddPostRequestBody} from './isOddPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsOddPostRequestBody(isOddPostRequestBody: IsOddPostRequestBody | undefined = {} as IsOddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { isOddPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
