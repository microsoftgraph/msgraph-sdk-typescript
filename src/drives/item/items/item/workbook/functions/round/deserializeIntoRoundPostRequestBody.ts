import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RoundPostRequestBody} from './roundPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoundPostRequestBody(roundPostRequestBody: RoundPostRequestBody | undefined = {} as RoundPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { roundPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numDigits": n => { roundPostRequestBody.numDigits = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
