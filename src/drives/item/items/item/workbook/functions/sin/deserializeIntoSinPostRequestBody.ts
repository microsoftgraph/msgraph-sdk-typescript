import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SinPostRequestBody} from './sinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSinPostRequestBody(sinPostRequestBody: SinPostRequestBody | undefined = {} as SinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
