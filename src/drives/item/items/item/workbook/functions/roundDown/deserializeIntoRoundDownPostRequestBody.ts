import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {RoundDownPostRequestBody} from './roundDownPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoundDownPostRequestBody(roundDownPostRequestBody: RoundDownPostRequestBody | undefined = {} as RoundDownPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { roundDownPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numDigits": n => { roundDownPostRequestBody.numDigits = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
