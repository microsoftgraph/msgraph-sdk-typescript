import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AsinPostRequestBody} from './asinPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAsinPostRequestBody(asinPostRequestBody: AsinPostRequestBody | undefined = {} as AsinPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { asinPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
