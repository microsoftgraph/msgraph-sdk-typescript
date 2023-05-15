import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {AcosPostRequestBody} from './acosPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAcosPostRequestBody(acosPostRequestBody: AcosPostRequestBody | undefined = {} as AcosPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { acosPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
