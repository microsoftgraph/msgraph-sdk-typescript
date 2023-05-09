import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {FisherInvPostRequestBody} from './fisherInvPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFisherInvPostRequestBody(fisherInvPostRequestBody: FisherInvPostRequestBody | undefined = {} as FisherInvPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "y": n => { fisherInvPostRequestBody.y = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
