import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {AcosPostRequestBody} from './acosPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcosPostRequestBody(acosPostRequestBody: AcosPostRequestBody | undefined = {} as AcosPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acosPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
