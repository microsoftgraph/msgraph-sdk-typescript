import type {OnenotePatchContentCommand} from '../../../../../../../../../../../../../../models/onenotePatchContentCommand';
import {serializeOnenotePatchContentCommand} from '../../../../../../../../../../../../../../models/serializeOnenotePatchContentCommand';
import type {OnenotePatchContentPostRequestBody} from './onenotePatchContentPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePatchContentPostRequestBody(writer: SerializationWriter, onenotePatchContentPostRequestBody: OnenotePatchContentPostRequestBody | undefined = {} as OnenotePatchContentPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<OnenotePatchContentCommand>("commands", onenotePatchContentPostRequestBody.commands, serializeOnenotePatchContentCommand);
        writer.writeAdditionalData(onenotePatchContentPostRequestBody.additionalData);
}
