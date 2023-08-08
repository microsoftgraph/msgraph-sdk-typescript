import {createOnenotePatchContentCommandFromDiscriminatorValue} from '../../../../../../../../../../models/createOnenotePatchContentCommandFromDiscriminatorValue';
import type {OnenotePatchContentCommand} from '../../../../../../../../../../models/onenotePatchContentCommand';
import {serializeOnenotePatchContentCommand} from '../../../../../../../../../../models/serializeOnenotePatchContentCommand';
import type {OnenotePatchContentPostRequestBody} from './onenotePatchContentPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePatchContentPostRequestBody(onenotePatchContentPostRequestBody: OnenotePatchContentPostRequestBody | undefined = {} as OnenotePatchContentPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "commands": n => { onenotePatchContentPostRequestBody.commands = n.getCollectionOfObjectValues<OnenotePatchContentCommand>(createOnenotePatchContentCommandFromDiscriminatorValue); },
    }
}
