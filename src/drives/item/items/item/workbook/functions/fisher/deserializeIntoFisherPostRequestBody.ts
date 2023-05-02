import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FisherPostRequestBody} from './fisherPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFisherPostRequestBody(fisherPostRequestBody: FisherPostRequestBody | undefined = {} as FisherPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "x": n => { fisherPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
