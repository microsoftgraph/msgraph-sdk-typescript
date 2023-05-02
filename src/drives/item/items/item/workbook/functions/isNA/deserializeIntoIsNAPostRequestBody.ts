import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {IsNAPostRequestBody} from './isNAPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsNAPostRequestBody(isNAPostRequestBody: IsNAPostRequestBody | undefined = {} as IsNAPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isNAPostRequestBody.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
