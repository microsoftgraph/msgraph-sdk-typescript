import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ModPostRequestBody} from './modPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoModPostRequestBody(modPostRequestBody: ModPostRequestBody | undefined = {} as ModPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "divisor": n => { modPostRequestBody.divisor = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { modPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
