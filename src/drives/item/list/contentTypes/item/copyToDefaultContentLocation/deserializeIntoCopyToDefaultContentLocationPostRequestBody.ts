import {createItemReferenceFromDiscriminatorValue} from '../../../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../../models/serializeItemReference';
import {CopyToDefaultContentLocationPostRequestBody} from './copyToDefaultContentLocationPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToDefaultContentLocationPostRequestBody(copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {} as CopyToDefaultContentLocationPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationFileName": n => { copyToDefaultContentLocationPostRequestBody.destinationFileName = n.getStringValue(); },
        "sourceFile": n => { copyToDefaultContentLocationPostRequestBody.sourceFile = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
