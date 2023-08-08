import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {EvenPostRequestBody} from './evenPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEvenPostRequestBody(evenPostRequestBody: EvenPostRequestBody | undefined = {} as EvenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { evenPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
