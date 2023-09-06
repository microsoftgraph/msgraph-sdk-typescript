import { createItemReferenceFromDiscriminatorValue } from '../../../../../models/createItemReferenceFromDiscriminatorValue';
import { type ItemReference } from '../../../../../models/itemReference';
import { serializeItemReference } from '../../../../../models/serializeItemReference';
import { type CopyPostRequestBody } from './copyPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { copyPostRequestBody.name = n.getStringValue(); },
        "parentReference": n => { copyPostRequestBody.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
