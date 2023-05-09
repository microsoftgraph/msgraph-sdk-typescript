import {createItemReferenceFromDiscriminatorValue} from '../../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import {CopyPostRequestBody} from './copyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {} as CopyPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { copyPostRequestBody.name = n.getStringValue(); },
        "parentReference": n => { copyPostRequestBody.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
