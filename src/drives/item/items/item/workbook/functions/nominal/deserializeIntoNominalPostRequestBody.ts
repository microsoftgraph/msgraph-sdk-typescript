import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {NominalPostRequestBody} from './nominalPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNominalPostRequestBody(nominalPostRequestBody: NominalPostRequestBody | undefined = {} as NominalPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "effectRate": n => { nominalPostRequestBody.effectRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "npery": n => { nominalPostRequestBody.npery = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
