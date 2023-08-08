import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {FisherPostRequestBody} from './fisherPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFisherPostRequestBody(fisherPostRequestBody: FisherPostRequestBody | undefined = {} as FisherPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { fisherPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
