import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AsinPostRequestBody} from './asinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAsinPostRequestBody(asinPostRequestBody: AsinPostRequestBody | undefined = {} as AsinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { asinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
