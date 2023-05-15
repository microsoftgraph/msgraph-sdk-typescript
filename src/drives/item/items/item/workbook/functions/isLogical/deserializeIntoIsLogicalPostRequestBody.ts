import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsLogicalPostRequestBody} from './isLogicalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsLogicalPostRequestBody(isLogicalPostRequestBody: IsLogicalPostRequestBody | undefined = {} as IsLogicalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isLogicalPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
