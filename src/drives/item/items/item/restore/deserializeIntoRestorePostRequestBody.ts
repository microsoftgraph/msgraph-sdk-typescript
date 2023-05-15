import {createItemReferenceFromDiscriminatorValue} from '../../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../../models/itemReference';
import {serializeItemReference} from '../../../../../models/serializeItemReference';
import {RestorePostRequestBody} from './restorePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRestorePostRequestBody(restorePostRequestBody: RestorePostRequestBody | undefined = {} as RestorePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { restorePostRequestBody.name = n.getStringValue(); },
        "parentReference": n => { restorePostRequestBody.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
