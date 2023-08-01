import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AscPostRequestBody} from './ascPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAscPostRequestBody(ascPostRequestBody: AscPostRequestBody | undefined = {} as AscPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { ascPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
