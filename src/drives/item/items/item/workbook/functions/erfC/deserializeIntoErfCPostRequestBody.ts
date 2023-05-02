import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ErfCPostRequestBody} from './erfCPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErfCPostRequestBody(erfCPostRequestBody: ErfCPostRequestBody | undefined = {} as ErfCPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { erfCPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
