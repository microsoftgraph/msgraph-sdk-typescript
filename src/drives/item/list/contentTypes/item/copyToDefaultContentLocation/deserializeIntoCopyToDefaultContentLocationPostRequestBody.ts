import { createItemReferenceFromDiscriminatorValue } from '../../../../../../models/createItemReferenceFromDiscriminatorValue';
import { type ItemReference } from '../../../../../../models/itemReference';
import { serializeItemReference } from '../../../../../../models/serializeItemReference';
import { type CopyToDefaultContentLocationPostRequestBody } from './copyToDefaultContentLocationPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToDefaultContentLocationPostRequestBody(copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {} as CopyToDefaultContentLocationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationFileName": n => { copyToDefaultContentLocationPostRequestBody.destinationFileName = n.getStringValue(); },
        "sourceFile": n => { copyToDefaultContentLocationPostRequestBody.sourceFile = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
