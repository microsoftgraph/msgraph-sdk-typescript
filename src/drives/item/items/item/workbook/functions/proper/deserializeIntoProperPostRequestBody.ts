import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ProperPostRequestBody} from './properPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProperPostRequestBody(properPostRequestBody: ProperPostRequestBody | undefined = {} as ProperPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "text": n => { properPostRequestBody.text = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
