import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {EvenPostRequestBody} from './evenPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEvenPostRequestBody(evenPostRequestBody: EvenPostRequestBody | undefined = {} as EvenPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { evenPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
