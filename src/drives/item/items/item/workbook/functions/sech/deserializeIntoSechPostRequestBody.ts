import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {SechPostRequestBody} from './sechPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSechPostRequestBody(sechPostRequestBody: SechPostRequestBody | undefined = {} as SechPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { sechPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
